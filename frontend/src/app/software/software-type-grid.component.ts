import {Component, OnInit, ViewChild} from '@angular/core';
import {SoftwareService} from "./software.service";
import {Software} from "./software";
import {EntityGridBase} from "../utils/entity-grid-base";
import {MatDialog} from "@angular/material/dialog";
import {SoftwareType} from "./software-type";
import {SoftwareTypeService} from "./software-type.service";


@Component({
  selector: 'sg-software-type-grid',
  template: `
      <div id="sg-table-container">
          <table mat-table [dataSource]="this.Entities" class="mat-elevation-z4">
              <ng-container matColumnDef="select">
                  <th mat-header-cell *matHeaderCellDef>
                      <mat-checkbox>
                      </mat-checkbox>
                  </th>
                  <td mat-cell *matCellDef="let row" class="sg-table-checkbox">
                      <mat-checkbox>
                      </mat-checkbox>
                  </td>
              </ng-container>

              <ng-container matColumnDef="id">
                  <th mat-header-cell *matHeaderCellDef>№</th>
                  <td mat-cell *matCellDef="let element"
                      (contextmenu)="onContextMenu($event, element)"> {{element.Id}} </td>
              </ng-container>

              <!-- Name Column -->
              <ng-container matColumnDef="name">
                  <th mat-header-cell *matHeaderCellDef>Имя</th>
                  <td mat-cell *matCellDef="let element"
                      (contextmenu)="onContextMenu($event, element)"> {{element.Name}} </td>
              </ng-container>

              <ng-container matColumnDef="inventory_id">
                  <th mat-header-cell *matHeaderCellDef>Инвентарный номер</th>
                  <td mat-cell *matCellDef="let element"
                      (contextmenu)="onContextMenu($event, element)"> {{element.InventoryId}} </td>
              </ng-container>

              <ng-container matColumnDef="info" stickyEnd>
                  <th mat-header-cell *matHeaderCellDef></th>
                  <td mat-cell *matCellDef="let element" class="sg-table-info-button">
                      <button mat-icon-button>
                          <mat-icon>error_outline</mat-icon>
                      </button>
                  </td>
              </ng-container>

              <tr mat-header-row *matHeaderRowDef="DisplayedColumns"></tr>
              <tr mat-row *matRowDef="let row; columns: DisplayedColumns;"></tr>
          </table>
          <div style="visibility: hidden; position: fixed"
               [style.left]="contextMenuPosition.x"
               [style.top]="contextMenuPosition.y"
               [matMenuTriggerFor]="contextMenu">
          </div>
          <mat-menu #contextMenu="matMenu">
              <ng-template matMenuContent let-item="item">
                  <button mat-menu-item [routerLink]="'/software-type/edit/' + item.Id">

                      <mat-icon>edit</mat-icon>
                      Изменить
                  </button>
                  <button mat-menu-item (click)="remove(item)">
                      <mat-icon>remove_circle_outline</mat-icon>
                      Удалить
                  </button>
              </ng-template>
          </mat-menu>
      </div>
      <sg-crud router-link="/software-type/add"
               icon="developer_board"
               [count]="this.Count"
               (Paginate)="this.refresh($event.offset, $event.limit)"
               entity-name="типов ПО"
               is-compact="false"></sg-crud>`,
})
export class SoftwareTypeGridComponent extends EntityGridBase<SoftwareType, SoftwareTypeService> {
  constructor(software: SoftwareTypeService, private dialogref: MatDialog) {
    super(software, dialogref, ['select', 'id', 'name', 'inventory_id', 'info'])
  }
}