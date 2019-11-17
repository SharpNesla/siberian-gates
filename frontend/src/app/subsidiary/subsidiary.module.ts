import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SubsidiariesComponent} from "./subsidiaries.component";
import {UtilsModule} from "../utils/utils.module";
import {MatTabsModule} from "@angular/material/tabs";
import {SubsidiaryGridComponent} from "./subsidiary-grid.component";
import {MatTableModule} from "@angular/material/table";
import {SubsidiaryEditorComponent} from "./subsidiary-editor.component";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {HttpClientModule} from "@angular/common/http";
import {RoomModule} from "../room/room.module";


@NgModule({
  declarations: [SubsidiariesComponent, SubsidiaryGridComponent, SubsidiaryGridComponent,
  SubsidiaryEditorComponent],
  imports: [
    CommonModule,
    RoomModule,
    HttpClientModule,
    UtilsModule,
    MatTabsModule,
    MatTableModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class SubsidiaryModule {
}
