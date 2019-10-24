import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'toCelsius'})
export class TemperaturePipe implements PipeTransform {
  transform(value: number): string {
    return isNaN(value) ? 'N/A' : `${value.toFixed(1)} °C`;
  }
}
