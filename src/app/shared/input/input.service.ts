import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { response } from 'express';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';

export interface JobRole {
  id: string;
  name: string;
}

@Injectable({
  providedIn: 'root',
})
export class InputService {
  private API = 'https://jobcore-demo.azurewebsites.net/api';
  private roleSubject = new BehaviorSubject<JobRole[]>([]);
  roles$: Observable<JobRole[]> = this.roleSubject.asObservable();
  chosenRoleSubject = new BehaviorSubject<string>('');
  chosenRole$ = this.chosenRoleSubject.asObservable();

  constructor(private http: HttpClient) {}

  getJobRoles(): Observable<JobRole[]> {
    return this.http.get<{ items: JobRole[] }>(`${this.API}/jobroles`).pipe(
      map((response) => response.items), // Витягуємо items із відповіді
      tap((roles) => {
        this.roleSubject.next(roles); // Оновлюємо BehaviorSubject
      })
    );
  }

  setChosenRole(role: string) {
    this.chosenRoleSubject.next(role)
  }

  getChosenRole(): Observable<string> {
    return this.chosenRole$;
  }
}
