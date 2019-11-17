import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SimulationContainerComponent } from './containers/simulation-container.component';
import { SimulationComponent } from './components/simulation/simulation.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RightBarComponent } from 'src/app/shared/components/right-bar/right-bar.component';

export const routes: Routes = [
  {
    path: '', component: SimulationContainerComponent
  },
  {
    path: '', component: RightBarComponent, outlet: 'sidebar'
  }];

@NgModule({
  declarations: [
    SimulationContainerComponent,
    SimulationComponent
  ],
  imports: [
    FlexLayoutModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  entryComponents: [],
  exports: [
    RouterModule
  ],
  providers: []
})

export class SimulationRoutingModule { }
