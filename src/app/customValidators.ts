import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
export function noWhitespaceValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { whitespace: true };
  };
}
export function timelineValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const originalYear = control.get('')?.value;
    const remakeYear = control.get('remakeYear')?.value;
    if (originalYear && remakeYear && Number(remakeYear) < Number(originalYear)) {
      return { invalidTimeline: true };
    }
    return null;
  };
}
