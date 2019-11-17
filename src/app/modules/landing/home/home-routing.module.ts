import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeContainerComponent } from './containers/home-container.component';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CategoryComponent } from './components/category/category.component';
import { ThumbnailComponent } from './components/thumbnail/thumbnail.component';
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
    path: '', component: HomeContainerComponent
  },
];

@NgModule({
  declarations: [
    HomeContainerComponent,
    HomeComponent,
    CategoryComponent,
    ThumbnailComponent
  ],
  imports: [
    ...materialModules,
    FlexLayoutModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    NgxPaginationModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class HomeRoutingModule { }
