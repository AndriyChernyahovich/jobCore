import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { response } from 'express';
import { map, Observable } from 'rxjs';

export interface Workers {
  items: Worker[];
  totalCount: number | undefined;
  pageSize: number | undefined;
  currentPage: number | undefined;
}

export interface Worker {
  id: string;
  externalId: string;
  imageUrl: string;
  firstName: string;
  lastName: string;
  jobTitle: string;
  email: string;
  phoneNumber: string;
}

@Injectable({
  providedIn: 'root',
})
export class MainService {
  private API = 'https://jobcore-demo.azurewebsites.net/api';

  constructor(private http: HttpClient) {}

  getAvailebleTeachers(): Observable<Workers> {
    return this.http.get<Workers>(`${this.API}/workers`);
  }

  getWorkers() {
    return this.http.get(`${this.API}/jobroles`);
  }
}
