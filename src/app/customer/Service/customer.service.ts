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

  private PublishUrl = 'http://172.21.95.70/api/api/';




  getTicket(id: string) {
    return this.http.get<ResultViewModel>(`${this.apiUrl}OnboardingRequest/${id}`);
  }

  uploadFiles(formData: FormData): Observable<ResultViewModel> {
    return this.http.post<ResultViewModel>(`${this.apiUrl}OnboardingRequest/upload`, formData);
  }

  updateStatusName(statusName: string, onboardingRequestId: string) {
    const url = `${this.apiUrl}OnboardingRequest/UpdateStatusName/${statusName}?onboardingRequestId=${onboardingRequestId}`;
    return this.http.post<ResultViewModel>(url, {});
  }
  
  

}
