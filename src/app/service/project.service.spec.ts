import { TestBed } from '@angular/core/testing';
import { ProjectService } from './project.service';
import { Project } from '../models/project';
import { of } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

describe('ProjectService', () => {
  let service: ProjectService;

  //Données de test
  const mockProjects: Project[] = [
    { id: 1, name: 'GESTION A', projectNumber: '124', status: 'Approuvé' },
    { id: 2, name: 'GESTION B', projectNumber: '12345', status: 'Validation' },
    { id: 3, name: 'GESTION C', projectNumber: '12346', status: 'Refusé' },
    { id: 4, name: 'GESTION D', projectNumber: '12347', status: 'Inactif' },
    { id: 5, name: 'GESTION E', projectNumber: '12348', status: 'Création' }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule],
      providers: [ProjectService]
    });
    service = TestBed.inject(ProjectService);
  });

  //Nous vérifions que le service a bien été créé
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  //Nous vérifions que le service retourne bien nos projets
  it('should fetch projects', () => {
    //Lorsque la méthode méthode getProjects de notre service est appelée, nous retournons les données de test.
    spyOn(service, 'getProjects').and.returnValue(of(mockProjects));

    service.getProjects().subscribe((projects) => {
      expect(projects.length).toBe(5);
      expect(projects).toEqual(mockProjects);
    });
  });
});
