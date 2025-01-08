import { Component, Input } from '@angular/core';
import { PaycheckService } from '../service/paycheck.service';
import { PaycheckPeriod } from '../model/paycheck';

@Component({
  selector: 'app-single-paycheck-horizontal-menu',
  templateUrl: './single-paycheck-horizontal-menu.component.html',
  styleUrl: './single-paycheck-horizontal-menu.component.scss',
})
export class SinglePaycheckHorizontalMenuComponent {
  @Input() referencePeriod: PaycheckPeriod = {
    month: 0,
    year: 0,
  };

  constructor(private readonly paycheckService: PaycheckService) {}

  downloadJson() {
    let selectedPaycheck = this.paycheckService.fetchPaychecksByPeriod(
      this.referencePeriod,
    );
    const blob = new Blob([JSON.stringify(selectedPaycheck, null, 2)], {
      type: 'application/json',
    });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download =
      'paycheck-' +
      this.referencePeriod.year +
      '-' +
      this.referencePeriod.month +
      '.json';
    a.click();
    window.URL.revokeObjectURL(url);
  }
}
