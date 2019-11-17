import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TopHeaderComponent } from './components/top-header/top-header.component';
import { ToolbarMenuComponent } from './components/toolbar-menu/toolbar-menu.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { BottomMenuComponent } from './components/bottom-menu/bottom-menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { DropdownCollapseComponent } from './components/dropdown-collapse/dropdown-collapse.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { LeftBarComponent } from './components/left-bar/left-bar.component';
import { RightBarComponent } from './components/right-bar/right-bar.component';
import { RouterModule } from '@angular/router';
import { CheckboxSwitchComponent } from './components/checkbox-switch/checkbox-switch.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SearchComponent } from './components/search/search.component';
import { CdkTreeModule } from '@angular/cdk/tree';
import { PanelMenuModule } from 'primeng/panelmenu';

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
  MatExpansionModule,
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatTreeModule,
  MatProgressBarModule
} from '@angular/material';
import { UnderconstructionComponent } from './components/under-construction/under-construction.component';
import { TreeMenuComponent } from './components/tree-menu/tree-menu.component';
import { TopnavComponent } from './components/topnav/topnav.component';
import { BaseCardComponent } from './components/base-card/base-card.component';
import { ReferenceService } from '../modules/main/reference/services/reference.service';
import { DialogModule } from '../modules/dialog/dialog.module';

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
  MatExpansionModule,
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatTreeModule,
  CdkTreeModule,
  MatProgressBarModule
];

const primeNgModules = [
  PanelMenuModule
];

@NgModule({
  declarations: [
    TopHeaderComponent,
    ToolbarMenuComponent,
    BreadcrumbComponent,
    BottomMenuComponent,
    FooterComponent,
    DropdownCollapseComponent,
    DropdownComponent,
    LeftBarComponent,
    RightBarComponent,
    CheckboxSwitchComponent,
    SearchComponent,
    UnderconstructionComponent,
    TreeMenuComponent,
    TopnavComponent,
    BaseCardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    ...materialModules,
    ...primeNgModules,
    DialogModule
  ],
  exports: [
    TopHeaderComponent,
    ToolbarMenuComponent,
    BreadcrumbComponent,
    BottomMenuComponent,
    FooterComponent,
    DropdownCollapseComponent,
    DropdownComponent,
    LeftBarComponent,
    RightBarComponent,
    RouterModule,
    CheckboxSwitchComponent,
    UnderconstructionComponent,
    TreeMenuComponent,
    TopnavComponent,
    BaseCardComponent,
  ],
  providers: [
    ReferenceService
  ],
  entryComponents: [
    SearchComponent
  ]
})
export class SharedModule { }
