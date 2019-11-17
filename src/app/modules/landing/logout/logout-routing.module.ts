import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LogoutContainerComponent } from './containers/logout-container.component';
import { LogoutComponent } from './components/logout/logout.component';
import { NgxPaginationModule } from 'ngx-pagination';
import {
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatOptionModule,
  MatSelectModule,
  MatExpansionModule
} from '@angular/material';

const materialModules = [
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatOptionModule,
  MatSelectModule,
  MatExpansionModule
];

export const routes: Routes = [
  {
    path: '', component: LogoutContainerComponent
  },
];

@NgModule({
  declarations: [
    LogoutContainerComponent,
    LogoutComponent
  ],
  imports: [
    ...materialModules,
    FlexLayoutModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class LogoutRoutingModule { }
