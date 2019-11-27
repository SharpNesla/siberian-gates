import {Component, OnInit} from '@angular/core';
import {EditorBase} from "../utils/editor-base";
import {Part} from "../entities/part";
import {PartService} from "../services/part.service";
import {ActivatedRoute} from "@angular/router";
import {PartType} from "../entities/part-type";
import {PartTypeService} from "../services/part-type.service";

@Component({
  selector: 'sg-part-editor',
  template: `
      <sg-dialog-layout (Accept)="applyChanges()" (Deny)="discardChanges()" end-link="/part-types">
          <header>
              <mat-icon id="sg-editor-icon">desktop_mac</mat-icon>
              {{isNew ? 'Добавление' : 'Изменение'}}
              типа комплектующего {{!isNew ? '№' + this.Entity.Id : ''}}</header>
          <div id="sg-editor-card-container">
              <mat-card id="left-section">
                  <h2 class="mat-title">Общая информация</h2>
                  <mat-form-field>
                      <input matInput placeholder="Марка и модель"
                             [(ngModel)]="this.Entity.Model">
                  </mat-form-field>
                  <mat-form-field>
                      <input type="number" step=0.01 min="0.01" matInput required
                             [(ngModel)]="Entity.Cost" placeholder="Цена">
                  </mat-form-field>
                  <mat-form-field>
                      <mat-select placeholder="Категория">
                          <mat-option *ngFor="let elem of PartTypes">
                              {{elem}}
                          </mat-option>
                      </mat-select>
                  </mat-form-field>
              </mat-card>
              <mat-card id="right-section">
                  <h2 class="mat-title">Характеристики и комментарий</h2>
                  <mat-form-field appearance="outline">
                      <mat-label>Характеристики</mat-label>
                      <textarea matInput placeholder="Характеристики"
                                [(ngModel)]="this.Entity.Characteristics"></textarea>
                  </mat-form-field>
                  <mat-form-field appearance="outline">
                      <mat-label>Комментарий</mat-label>
                      <textarea matInput placeholder="Комментарий"
                                [(ngModel)]="this.Entity.Comment"></textarea>
                  </mat-form-field>
              </mat-card>
          </div>
      </sg-dialog-layout>`,
  styleUrls: ['../utils/editors-styles.scss']
})
export class PartTypeEditorComponent extends EditorBase<PartType, PartTypeService> {

  PartTypes = ['Центральный процессор',
    '',''];
  constructor(private service: PartTypeService, route: ActivatedRoute) {
    super(service, route, new PartType());
  }

}