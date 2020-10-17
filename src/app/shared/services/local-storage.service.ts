import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  updateNewMobileNumberInLocalStorage(studentNewMobileNumber: string) {
    let loggedInUserInLocalStorage = JSON.parse(localStorage.getItem('loggedInUser'));
    loggedInUserInLocalStorage.contactNo = studentNewMobileNumber;
    localStorage.setItem('loggedInUser', JSON.stringify(loggedInUserInLocalStorage));
  }

  setCurrentCircularIdInLocalStorage(circularId: string) {
    localStorage.setItem('currentCircularId', JSON.stringify(circularId));
  }

  getCurrntCircularIdFromLocalStorage() {
    const circularId = JSON.parse(localStorage.getItem('currentCircularId'));
    return circularId;
  }
}
