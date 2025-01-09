import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PaycheckService } from '../service/paycheck.service';
import { PaycheckFileIoService } from '../service/paycheck-file-io.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { PaycheckFormModalComponent } from '../paycheck-form-modal/paycheck-form-modal.component';

@Component({
  selector: 'app-paycheck-horizontal-menu',
  templateUrl: './paycheck-horizontal-menu.component.html',
  styleUrl: './paycheck-horizontal-menu.component.scss',
})
export class PaycheckHorizontalMenuComponent {
  @Output() selectedYearEventEmitter: EventEmitter<number> =
    new EventEmitter<number>();

  constructor(
    private readonly paycheckService: PaycheckService,
    private readonly paycheckFileIOService: PaycheckFileIoService,
    private readonly matSnackBar: MatSnackBar,
    private readonly matDialog: MatDialog,
  ) {}

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

  public importPaychecksFromFile() {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = '.json'; // Restrict to JSON files
    fileInput.style.display = 'none'; // Hide it from view

    // Add an event listener to handle file selection
    fileInput.addEventListener('change', (event: Event) =>
      this.paycheckFileIOService
        .fetchPaycheckDataFromFileSelectedEvent(event)
        .subscribe({
          next: (value) => {
            console.log('Next -> ', value);
            this.paycheckService.addPaycheckList(value);
          },
          error: (error) => this.openSnackBar(error.message, 'Close'),
        }),
    );

    // Append to the DOM temporarily
    document.body.appendChild(fileInput);

    // Trigger the file input click event
    fileInput.click();

    // Remove the file input from the DOM after use
    fileInput.remove();
  }

  public exportPaychecksToFile() {
    let selectedPaycheck = this.paycheckService.fetchPaychecks();
    const blob = new Blob([JSON.stringify(selectedPaycheck, null, 2)], {
      type: 'application/json',
    });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'paychecks.json';
    a.click();
    window.URL.revokeObjectURL(url);
  }

  public openSnackBar(message: string, action: string) {
    this.matSnackBar.open(message, action);
  }

  public openPaycheckFormModal() {
    const dialogRef = this.matDialog.open(PaycheckFormModalComponent, {
      data: {},
      minWidth: '1200px',
      minHeight: '500px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog has closes');
    });
  }
}
