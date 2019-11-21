import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from "rxjs";
import {Subsidiary} from "./subsidiary";
import {SubsidiaryService} from "./subsidiary.service";
import {map} from "rxjs/operators";
import {SingleSearchBase} from "../utils/single-search-base";

@Component({
  selector: 'sg-subsidiary-search',
  template: `
      <mat-form-field class="sg-search">
          <mat-label>{{hint}}</mat-label>
          <mat-select [value]="selectedEntity"
                      (opened)="this.search()"                            
                      (valueChange)="selectedEntityChanged.emit($event)">
              <button mat-icon-button>
                  <mat-icon>search</mat-icon>
              </button>
              <mat-form-field appearance="standard">
                  <input matInput placeholder="Поиск сущности"
                         (keydown)="$event.stopPropagation()"
                         type="search"
                         [(ngModel)]="searchString">
              </mat-form-field>
              <mat-option [value]="null">Не задано</mat-option>
              <mat-option *ngFor="let entity of entities | async" [value]="entity">
                  {{entity.Id}} {{entity.Address}}
              </mat-option>
          </mat-select>
      </mat-form-field>`,
  styles: [`
      .sg-search {
          width: 100%;
      }

      button {
          margin-left: 8px;
          margin-right: 4px;
      }`]
})
export class SubsidiarySearchComponent extends SingleSearchBase<Subsidiary, SubsidiaryService> {
  constructor(service : SubsidiaryService){
    super(service);
  }
}