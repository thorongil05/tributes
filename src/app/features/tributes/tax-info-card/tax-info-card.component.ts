import { Component, Input } from '@angular/core';
import { TaxInfo } from '../model/TaxInfo';

@Component({
  selector: 'app-tax-info-card',
  templateUrl: './tax-info-card.component.html',
  styleUrl: './tax-info-card.component.scss',
})
export class TaxInfoCardComponent {
  @Input() taxInfo: TaxInfo = new TaxInfo(0, 0);
}
