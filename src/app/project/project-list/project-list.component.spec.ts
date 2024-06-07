import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectListComponent } from './project-list.component';
import { ProjectService } from '../../service/project.service';
import { of } from 'rxjs';

describe('ProjectListComponent', () => {
  let component: ProjectListComponent;
  let fixture: ComponentFixture<ProjectListComponent>;
  let projectService: ProjectService;

  const mockProjects = [
    { id: 1, name: 'GESTION A', projectNumber: '1234', status: 'Approuvé' },
    { id: 2, name: 'GESTION A', projectNumber: '1234', status: 'Validation' },
    { id: 3, name: 'GESTION A', projectNumber: '1234', status: 'Refusé' },
    { id: 4, name: 'GESTION A', projectNumber: '1234', status: 'Inactif' },
    { id: 5, name: 'GESTION A', projectNumber: '1234', status: 'Création' }
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectListComponent ],
      providers: [ ProjectService ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectListComponent);
    component = fixture.componentInstance;
    projectService = TestBed.inject(ProjectService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize projects on ngOnInit', () => {
    spyOn(projectService, 'getProjects').and.returnValue(of(mockProjects));

    component.ngOnInit();

    expect(component.dataSource.data).toEqual(mockProjects);
  });

  it('should apply filter correctly', () => {
    const event = { target: { value: 'Approuvé' } } as Event;
    component.applyFilter(event);

    expect(component.dataSource.filter).toBe('Approuvé');
  });

  it('should search correctly', () => {
    const value = 'GESTION A';
    component.search(value);

    expect(component.dataSource.filter).toBe('GESTION A');
  });

  it('should return displayed columns', () => {
    const expectedColumns = ['nom', 'numeroProjet', 'statut'];
    const result = component.getDisplayedColumns();

    expect(result).toEqual(expectedColumns);
  });

});

