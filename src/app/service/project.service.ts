import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Project } from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  jsonSource : string = '/assets/data/data.json'

  constructor(private http: HttpClient) { }

  getProjects(): Observable<Project[]> {
    return  this.http.get<Project[]>(this.jsonSource);
  }

}
