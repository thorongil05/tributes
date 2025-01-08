import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PaycheckService } from '../service/paycheck.service';

@Component({
  selector: 'app-paycheck-horizontal-menu',
  templateUrl: './paycheck-horizontal-menu.component.html',
  styleUrl: './paycheck-horizontal-menu.component.scss',
})
export class PaycheckHorizontalMenuComponent {
  @Output() selectedYearEventEmitter: EventEmitter<number> =
    new EventEmitter<number>();

  constructor(private readonly paycheckService: PaycheckService) {}

  formGroup: FormGroup = new FormGroup({
    yearFormControl: new FormControl<number>(new Date().getFullYear()),
  });

  public get availableYearList() {
    return this.paycheckService.fetchYears();
  }

  public onYearSelectionChange() {
    let newSelectedYear = this.formGroup.get('yearFormControl')?.value;
    if (newSelectedYear) {
      this.selectedYearEventEmitter.emit(newSelectedYear);
    }
  }
}
