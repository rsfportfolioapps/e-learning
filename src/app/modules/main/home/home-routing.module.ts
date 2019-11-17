import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeContainerComponent } from './containers/home-container.component';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { StartCourseComponent } from './components/start-course/start-course.component';
import { ShortTutorialComponent } from './components/short-tutorial/short-tutorial.component';
import { TutorialComponent } from './components/tutorial/tutorial.component';
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
    StartCourseComponent,
    ShortTutorialComponent,
    TutorialComponent,
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
