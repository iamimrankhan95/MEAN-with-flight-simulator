import { Injectable } from '@angular/core';


// import * as numberToWordsConverter from 'number-to-words';

@Injectable({
  providedIn: 'root'
})
export class UtilityMethodService {

  constructor() { }

  // capitalize first letter of every word in a string
  titleCase(title: string) {
    const str = title.split(' ');
    return str.map(word => word[0].toUpperCase() + word.substr(1)).join(' ');
  }

  // convertAnnualIncomeInWords(guardianAnnualIncome: string) {
  //   const annualIncome = parseInt(guardianAnnualIncome, 10);
  //   let annualIncomeInWords = numberToWordsConverter.toWords(annualIncome);
  //   annualIncomeInWords = this.titleCase(annualIncomeInWords) + ' Taka Only';

  //   return annualIncomeInWords;
  // }

  getAcamedicSessions() {
    const academicSessions = [];
    const currentYear = new Date().getFullYear();

    for (let i = currentYear - 10; i < currentYear + 5; i++) {
      academicSessions.push(i + '-' + (i + 1));
    }

    return academicSessions.sort();
  }

  getAcademicSessionsUptoCurrentYear(startYear: number) {
    const academicSessions = [];
    const currentYear = new Date().getFullYear();

    for (let i = startYear; i < currentYear; i++) {
      academicSessions.push(i + '-' + (i + 1));
    }

    return academicSessions.sort();
  }

  getCurrentAcamedicSessions() {
    const currentYear = new Date().getFullYear() + '-' + (new Date().getFullYear() + 1);
    return currentYear;
  }

  getYears() {
    const admissionYears = [];
    const currentYear = new Date().getFullYear();

    for (let i = currentYear - 10; i < currentYear + 5; i++) {
      admissionYears.push(i);
    }

    return admissionYears.sort();
  }
  getAcademicYears() {
    const years = [
      { name: '1st', value: 'First Year' },
      { name: '2nd', value: 'Second Year' },
      { name: '3rd', value: 'Third Year' },
    ];

    return years;
  }

  convertDateToBanglaFormat(dateToConvert: Date): string {
    const year = dateToConvert.getFullYear();
    const month = dateToConvert.getMonth() + 1;
    const date = dateToConvert.getDate();
    const dateString = date + '/' + month + '/' + year;

    return dateString;
  }
}

export function toInteger(value: any): number {
  return parseInt(`${value}`, 10);
}

export function toString(value: any): string {
  return (value !== undefined && value !== null) ? `${value}` : '';
}

export function getValueInRange(value: number, max: number, min = 0): number {
  return Math.max(Math.min(value, max), min);
}

export function isString(value: any): value is string {
  return typeof value === 'string';
}

export function isNumber(value: any): value is number {
  return !isNaN(toInteger(value));
}

export function isInteger(value: any): value is number {
  return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
}

export function isDefined(value: any): boolean {
  return value !== undefined && value !== null;
}

export function padNumber(value: number) {
  if (isNumber(value)) {
    return `0${value}`.slice(-2);
  } else {
    return '';
  }
}

export function regExpEscape(text) {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}

export function hasClassName(element: any, className: string): boolean {
  return element && element.className && element.className.split &&
    element.className.split(/\s+/).indexOf(className) >= 0;
}

if (typeof Element !== 'undefined' && !Element.prototype.closest) {
  // Polyfill for ie10+

  if (!Element.prototype.matches) {
    // IE uses the non-standard name: msMatchesSelector
    Element.prototype.matches = (Element.prototype as any).msMatchesSelector || Element.prototype.webkitMatchesSelector;
  }

  Element.prototype.closest = function (s: string) {
    let el = this;
    if (!document.documentElement.contains(el)) {
      return null;
    }
    do {
      if (el.matches(s)) {
        return el;
      }
      el = el.parentElement || el.parentNode;
    } while (el !== null && el.nodeType === 1);
    return null;
  };
}

export function closest(element: HTMLElement, selector): HTMLElement {
  if (!selector) {
    return null;
  }

  return element.closest(selector);
}