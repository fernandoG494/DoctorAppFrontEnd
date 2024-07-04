import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaterialModule } from '../material/material.module';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [LayoutComponent, DashboardComponent],
  imports: [CommonModule, MaterialModule, AppRoutingModule],
  exports: [
    ReactiveFormsModule,
    FormsModule,
    LayoutComponent,
    DashboardComponent,
  ],
  providers: [provideHttpClient(withFetch())],
})
export class SharedModule {}
