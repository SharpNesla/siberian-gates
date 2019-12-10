import {EntityBase} from "../entities/entity-base";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {filter, map} from "rxjs/operators";

export const toCamel = (s) => {
  var str = s.replace(/([-_][a-z])/ig, ($1) => {
    return $1.toUpperCase()
      .replace('-', '')
      .replace('_', '');
  });
  return str[0].toUpperCase() + str.slice(1);
};

const isArray = function (a) {
  return Array.isArray(a);
};

const isObject = function (o) {
  return o === Object(o) && !isArray(o) && typeof o !== 'function';
};

export const keysToCamel = function (o) {
  if (isObject(o)) {
    const n = {};

    Object.keys(o)
      .forEach((k) => {
        n[toCamel(k)] = keysToCamel(o[k]);
      });

    return n;
  } else if (isArray(o)) {
    return o.map((i) => {
      return keysToCamel(i);
    });
  }

  return o;
};
const toSnake = function (s) {
  return s.replace(/\.?([A-Z])/g, function (x, y) {
    return "_" + y.toLowerCase()
  }).replace(/^_/, "")
};
const keysToSnake = function (o) {
  if (isObject(o)) {
    const n = {};

    Object.keys(o)
      .forEach((k) => {
        n[toSnake(k)] = o[k];
      });

    return n;
  }
  return o;
};

export abstract class EntityRepository<T extends EntityBase> {
  protected constructor(private client: HttpClient,
                        private entityPrefix: string,
                        private searchStringCriteris: string[]) {

  }

  public getCount(filterDefinition: T[]): Observable<number> {
    return this.client.get<number>(`api/${this.entityPrefix}/count`);
  }

  public remove(entity: T) {
    return this.client.delete(`api/${this.entityPrefix}/remove/${entity.Id}`)
  }

  public getById(id: number): Observable<T> {
    return this.client.get<T>(`api/${this.entityPrefix}/${id}`)
      .pipe(map(
        y => keysToCamel(y)
      ));
  }


  public getBySearchString(searchString: string, offset: number, limit: number, filterDefinition: object,
                           sortDefinition: string, sortOrder: string): Observable<T[]> {
    const params = new HttpParams()
      .set('searchstring', searchString)
      .set("offset", offset.toString())
      .set("limit", limit.toString())
      .set("sort-definition", sortDefinition == null ? "id" : sortDefinition)
      .set("sort-order", sortOrder)
      .set("filter", JSON.stringify(keysToSnake(filterDefinition)));
    return this.client.get<T[]>(`api/${this.entityPrefix}/get`, {params})
      .pipe(map(x => {
          console.log(x)
          return x.map(
            y => {
              const d = keysToCamel(y);

              console.log(keysToSnake(d));
              return d;
            })
        }
      ))
  }

  public get(offset: number, limit: number, filterDefinition: object,
             sortDefinition: string, sortOrder: string): Observable<T[]> {
    return this.getBySearchString("", offset, limit, filterDefinition, sortDefinition, sortOrder);
  }

  public add(entity: T) {
    const preparedEntity = this.prepareEntity({...entity});
    return this.client.post(`api/${this.entityPrefix}/add`, keysToSnake(preparedEntity))
  }

  public update(entity: T) {
    const preparedEntity = this.prepareEntity({...entity});
    const result = this.client.post(`api/${this.entityPrefix}/edit/${entity.Id}`, keysToSnake(preparedEntity))
      .subscribe(
        response => console.log(response),
        error => console.log(error)
      )
    ;
  }

  protected prepareEntity(entity: T): T {
    return entity;
  }
}