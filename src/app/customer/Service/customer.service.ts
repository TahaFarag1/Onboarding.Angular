import { ResultViewModel } from './../../../shared/ViewModel/response';
import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) { }

  private apiUrl = 'http://localhost:5136/api/';
  private apiKey = "eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJEWElGWSIsIlVzZXJuYW1lIjoiRFhJRlkiLCJleHAiOjE3NjY0ODgyOTMsImlhdCI6MTczNDk1MjI5M30.egTtfZ2AQtF3yOOx4Wasn8eHNqcrekePbiTTqdLppaQ";

  //private PublishUrl = 'http://172.21.95.70/api/api/';




  getTicket(id: string) {

    const headers = new HttpHeaders()
    .set('x-api-key', this.apiKey)
    .set('Content-Type', 'application/json');
    return this.http.get<ResultViewModel>(`${this.apiUrl}AccountOpeningTask/${id}`,{ headers });
  }

  uploadFiles(formData: FormData): Observable<ResultViewModel> {
    const headers = new HttpHeaders()
    .set('x-api-key', this.apiKey)
     
    return this.http.post<ResultViewModel>(`${this.apiUrl}AccountOpeningTask/upload`, formData,{ headers });
  }

  updateStatusName(statusName: string, onboardingRequestId: string) {
    const headers = new HttpHeaders()
      .set('x-api-key', this.apiKey)
      .set('Content-Type', 'application/json');
    const url = `${this.apiUrl}AccountOpeningTask/UpdateStatusName/${statusName}?onboardingRequestId=${onboardingRequestId}`;
    return this.http.post<ResultViewModel>(url, null, { headers });
  }
  

}
