import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/services/base.service';
import { Certificate } from '../models/certificate.model';

@Injectable()
export class CertificateService extends BaseService<Certificate> {
}