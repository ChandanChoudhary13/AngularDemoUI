import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Contacts} from "../model/contacts.model";
import {Observable} from "rxjs/index";
import {ApiResponse} from "../model/api.response";

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'https://localhost:44386/api/Contacts/';



  getUsers() : Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl + "GetContacts");
  }

  getUserById(id: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl + "GetContacts?contactId=" + id);
  }

  createUser(contact: Contacts): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl + "AddContacts", contact);
  }

  updateUser(contact: Contacts): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl + "UpdateContact", contact);
  }

  deleteUser(id: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(this.baseUrl + "DeleteContact?contactId=" + id);
  }
}
