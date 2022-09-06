import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { HomeRoutingModule } from './home-routing.module';
import { NavBarModule } from '../nav-bar/nav-bar.module';
import { ClienteDashboardComponent } from './cliente/dashboard/cliente-dashboard.component';
import { TecnicoDashboardComponent } from './tecnico/dashboard/tecnico-dashboard.component';
import { AdminDashboardComponent } from './admin/dashboard/admin-dashboard..component';
import { DashtecComponent } from './tecnico/dashboard/dashtec/dashtec.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { DashadminComponent } from './admin/dashboard/dashadmin/dashadmin.component';
import { DialogChamadosAbertosComponent } from './admin/dashboard/dialog-chamados-abertos/dialog-chamados-abertos.component';
import { DialogChamadosUrgentesComponent } from './admin/dashboard/dialog-chamados-urgentes/dialog-chamados-urgentes.component';
import { DialogChamadosTecnicoAbertosComponent } from './tecnico/dashboard/dialog-chamados-tecnico-abertos/dialog-chamados-tecnico-abertos.component';
import { DialogChamadosTecnicoUrgentesComponent } from './tecnico/dashboard/dialog-chamados-tecnico-urgentes/dialog-chamados-tecnico-urgentes.component';







@NgModule({
  declarations: [
    HomeComponent,
    ClienteDashboardComponent,
    TecnicoDashboardComponent,
    AdminDashboardComponent,
    DashtecComponent,
    DashadminComponent,
    DialogChamadosAbertosComponent,
    DialogChamadosUrgentesComponent,
    DialogChamadosTecnicoAbertosComponent,
    DialogChamadosTecnicoUrgentesComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HomeRoutingModule,
    NavBarModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule
  ],
  exports: [
    HomeComponent,
    ClienteDashboardComponent,
    TecnicoDashboardComponent,
    AdminDashboardComponent
  ]
})
export class HomeModule { }
