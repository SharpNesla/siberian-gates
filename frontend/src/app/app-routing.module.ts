import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {ComputersComponent} from "./computers/computers.component";
import {PageNotFoundComponent} from "./page-not-found.component";
import {ComputerEditorComponent} from "./computers/computer-editor.component";
import {PartsComponent} from "./parts/parts.component";
import {SubsidiariesComponent} from "./subsidiary/subsidiaries.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {AboutComponent} from "./about.component";
import {SettingsComponent} from "./settings.component";
import {LicensesComponent} from "./licenses/licenses.component";
import {SubsidiaryEditorComponent} from "./subsidiary/subsidiary-editor.component";
import {RoomEditorComponent} from "./subsidiary/room-editor.component";
import {License} from "./licenses/license";
import {LicenseEditorComponent} from "./licenses/license-editor.component";

const routes: Routes = [
  {path: '', component: LoginComponent},

  {path: 'dashboard', component: DashboardComponent},

  {path: 'computers', component: ComputersComponent},
  {path: 'computers/add', component: ComputerEditorComponent},
  {path: 'computers/edit/:id', component: ComputerEditorComponent},
  {path: 'computers/:id', component: ComputersComponent},

  {path: 'software', component: PartsComponent},
  {path: 'software/add', component: ComputerEditorComponent},
  {path: 'software/edit/:id', component: ComputerEditorComponent},
  {path: 'software/:id', component: ComputersComponent},

  {path: 'licenses', component: LicensesComponent},
  {path: 'licenses/add', component: LicenseEditorComponent},
  {path: 'licenses/edit/:id', component: LicenseEditorComponent},
  {path: 'licenses/:id', component: ComputersComponent},

  {path: 'parts', component: PartsComponent},
  {path: 'parts/add', component: ComputerEditorComponent},
  {path: 'parts/edit/:id', component: ComputerEditorComponent},
  {path: 'parts/:id', component: ComputersComponent},

  {path: 'subsidiaries', component: SubsidiariesComponent},
  {path: 'subsidiaries/add', component: SubsidiaryEditorComponent},
  {path: 'subsidiaries/edit/:id', component: SubsidiaryEditorComponent},
  {path: 'subsidiaries/:id', component: ComputersComponent},

  {path: 'rooms/add', component: RoomEditorComponent},
  {path: 'rooms/edit/:id', component: RoomEditorComponent},
  {path: 'rooms/:id', component: ComputersComponent},

  {path: 'settings', component: SettingsComponent},
  {path: 'about', component: AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
