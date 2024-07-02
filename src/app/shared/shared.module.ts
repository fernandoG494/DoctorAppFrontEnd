import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [LayoutComponent, DashboardComponent],
  imports: [CommonModule, MaterialModule],
  exports: [
    ReactiveFormsModule,
    FormsModule,
    LayoutComponent,
    DashboardComponent,
  ],
  providers: [provideHttpClient(withFetch())],
})
export class SharedModule {}
