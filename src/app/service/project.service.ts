import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Project } from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

 url = '/assets/data/'

  constructor(private http: HttpClient) { }

  getProjects(): Observable<Project[]> {
    return  this.http.get<Project[]>(this.url + 'data.json');

  }

}
