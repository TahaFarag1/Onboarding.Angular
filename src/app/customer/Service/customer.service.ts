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

  getTicket(id: string) {
    return this.http.get<ResultViewModel>(`${this.apiUrl}Ticket/${id}`);
  }

  uploadFiles(formData: FormData): Observable<ResultViewModel> {
    return this.http.post<ResultViewModel>(`${this.apiUrl}Ticket/upload`, formData);
  }

}
