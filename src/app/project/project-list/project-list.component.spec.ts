import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectListComponent } from './project-list.component';
import { ProjectService } from '../../service/project.service';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';
import { Project } from '../../models/project';
import { HttpClientModule } from '@angular/common/http';
import { AngularMaterialModule } from '../../angular-material/angular-material.module';

describe('ProjectListComponent', () => {
  let component: ProjectListComponent;
  let fixture: ComponentFixture<ProjectListComponent>;
  let projectService: ProjectService;

  const mockProjects: Project[] = [
    { id: 1, name: 'GESTION A', projectNumber: '124', status: 'Approuvé' },
    { id: 2, name: 'GESTION B', projectNumber: '12345', status: 'Validation' },
    { id: 3, name: 'GESTION C', projectNumber: '12346', status: 'Refusé' },
    { id: 4, name: 'GESTION D', projectNumber: '12347', status: 'Inactif' },
    { id: 5, name: 'GESTION E', projectNumber: '12348', status: 'Création' }
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectListComponent],
      imports: [
        AngularMaterialModule,
        BrowserAnimationsModule,
        HttpClientModule
      ],
      providers: [ProjectService]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectListComponent);
    component = fixture.componentInstance;
    projectService = TestBed.inject(ProjectService);
    spyOn(projectService, 'getProjects').and.returnValue(of(mockProjects));
    fixture.detectChanges();
  });

  //Nous vérifions que le composant a bien été créé
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //Nous vérifions que le composant récuppère bien la liste des projets lors de son initialisation
  it('should fetch projects on init', () => {
    expect(component.dataSource.data).toEqual(mockProjects);
  });

  //Nous vérions que la méthode de filtre fonctionne correctement
  it('should filter projects', () => {
    component.search('GESTION A');
    expect(component.dataSource.filteredData.length).toBe(1);
    expect(component.dataSource.filteredData[0].name).toBe('GESTION A');

    component.search('Approuvé');
    expect(component.dataSource.filteredData.length).toBe(1);
    expect(component.dataSource.filteredData[0].status).toBe('Approuvé');

    //Nous vérifions que la liste est vide lorsque on recherche un élement qui n'existe pas
    component.search('desjardin');
    expect(component.dataSource.filteredData.length).toBe(0);
  });

  //Nous vérifions les noms des colonnes affichées sur notre liste de projets
  it('should get displayed columns', () => {
    const displayedColumns = component.getDisplayedColumns();
    expect(displayedColumns).toEqual(['nom', 'numeroProjet', 'statut']);
  });


});
