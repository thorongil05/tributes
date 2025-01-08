import { Injectable } from '@angular/core';
import { Paycheck } from '../model/paycheck';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PaycheckFileIoService {
  constructor() {}

  public fetchPaycheckDataFromFileSelectedEvent(
    fileSelectedEvent: Event,
  ): Observable<Paycheck[]> {
    return new Observable((subscriber) => {
      const input = fileSelectedEvent?.target as HTMLInputElement;
      if (!input.files || input.files.length == 0) {
        subscriber.error('Invalid input');
        return;
      }
      const file = input.files[0];
      const reader = new FileReader();

      let paycheckList: Paycheck[] = [];

      reader.onload = () => {
        try {
          paycheckList = JSON.parse(reader.result as string) as Paycheck[];
          console.log('Paycheck list ->', paycheckList);
          subscriber.next(paycheckList);
          subscriber.complete();
        } catch (e) {
          subscriber.error(e);
        }
      };
      reader.readAsText(file);
    });
  }
}
