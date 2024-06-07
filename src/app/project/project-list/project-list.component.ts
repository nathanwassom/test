import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ProjectService } from '../../service/project.service';
import { Project } from '../../models/project';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
})
export class ProjectListComponent implements OnInit {
  // projects!: MatTableDataSource<Project>;
  searchQuery: string | undefined;
  displayedColumns: string[] = ['nom', 'numeroProjet', 'statut'];

  dataSource = new MatTableDataSource<Project>([]);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;


  }

  constructor(private _projectService: ProjectService) { }

  ngOnInit(): void {

    this._projectService.getProjects().subscribe({
      next: (projects) => {
        this.dataSource = new MatTableDataSource(projects);
        this.dataSource.paginator = this.paginator;
        console.log(projects);

      },
    });
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  search(value: string) {
    this.dataSource.filter = value.trim().toLowerCase();
  }

  getDisplayedColumns(): string[] {
    return this.displayedColumns;
  }
  getStatusClass(status:void){
    return '';
  }
}
