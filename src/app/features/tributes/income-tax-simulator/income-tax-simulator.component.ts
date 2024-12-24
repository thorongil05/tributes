import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-income-tax-simulator',
  templateUrl: './income-tax-simulator.component.html',
  styleUrl: './income-tax-simulator.component.scss',
})
export class IncomeTaxSimulatorComponent {
  formGroup = new FormGroup({
    taxableAmountFormController: new FormControl<number>(2000),
  });
}
