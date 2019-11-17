import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/services/base.service';
import { Simulation } from '../models/simulation.model';

@Injectable()
export class SimulationService extends BaseService<Simulation> {

}