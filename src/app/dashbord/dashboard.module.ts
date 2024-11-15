import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DashbordComponent } from './dashbord.component'; 
import { DashboardRoutes } from './dashbord.routing'; 
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    FlexLayoutModule,
    MatButtonModule,
    RouterModule.forChild(DashboardRoutes)
  ],
  declarations: [DashbordComponent]
})
export class DashboardModule { }
