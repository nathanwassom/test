import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ProjectService } from '../../service/project.service';
import { Project } from '../../models/project';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
})
export class ProjectListComponent implements OnInit {
  projects!: MatTableDataSource<Project>;
  searchQuery: string | undefined;

  // projets: Array<Project[]> = [];
  projets: (Project | undefined)[]= [];



  constructor(private _projectService: ProjectService) { }

  ngOnInit(): void {
    // this._projectService.getProjects().subscribe(
    //   projects => {
    //   // this.projects = new MatTableDataSource(projects);
    //   console.log(projects);
    // });
    this._projectService.getProjects().subscribe({
      next: (p) => {
        this.projets = p;

      },
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.projects.filter = filterValue.trim().toLowerCase();
  }

  getStatusClass(status:void){
    return '';
  }
}