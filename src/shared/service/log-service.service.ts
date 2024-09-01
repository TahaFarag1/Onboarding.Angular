import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogServiceService {


  constructor() { }

  logError(error: any): void {
    const currentDate = new Date();
    const errorMessage = `${currentDate.toISOString()} - ${error.message || error}`;
    const existingErrors = this.getErrors() || [];

    // Limit the number of stored errors, adjust as needed
    const maxErrors = 100;
    const newErrors = [errorMessage, ...existingErrors.slice(0, maxErrors - 1)];

    localStorage.setItem('errorLog', JSON.stringify(newErrors));
  }

  getErrors(): string[] | null {
    const errorLog = localStorage.getItem('errorLog');
    return errorLog ? JSON.parse(errorLog) : null;
  }
}
