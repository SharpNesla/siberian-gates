import {Component, OnInit} from '@angular/core';
import {LicensesService} from "./licenses.service";
import {License} from "./license";
import {EditorBase} from "../utils/editor-base";
import {Location} from "@angular/common";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'sg-computer-editor',
  template: `
      <sg-dialog-layout (Accept)="applyChanges()" (Deny)="discardChanges()" end-link="/licenses">
          <header><mat-icon id="sg-editor-icon">shop</mat-icon> {{isNew ? 'Добавление' : 'Изменение'}} 
              лицензии {{!isNew ? '№' + this.Entity.Id : ''}}</header>
          <div id="sg-editor-card-container">
              <mat-card id="left-section">
                  <h2 class="mat-title">Общая информация</h2>
                  <mat-form-field>
                      <input type="number" step=0.01 matInput required
                             [(ngModel)]="Entity.Cost" placeholder="Цена">
                  </mat-form-field>
                  <mat-form-field>
                      <input matInput [(ngModel)]="Entity.MaxApplyCount"
                             placeholder="Количество возможных применений">
                  </mat-form-field>
                  <mat-form-field>
                      <input matInput placeholder="Input">
                  </mat-form-field>
              </mat-card>
              <mat-card id="right-section">
                  <h2 class="mat-title">Комментарий</h2>
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
export class LicenseEditorComponent extends EditorBase<License, LicensesService> {


  constructor(private service: LicensesService, route: ActivatedRoute) {
    super(service, route, new License());
  }

}
