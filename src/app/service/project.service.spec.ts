import { TestBed } from '@angular/core/testing';
import { ProjectService } from './project.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('ProjectService', () => {
  let service: ProjectService;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProjectService]
    });
    service = TestBed.inject(ProjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get projects', () => {
    // service.getProjects().subscribe(projects => {
    //   expect(projects.length).toBeGreaterThan(0);
    // });
  });

  // it('should search projects', () => {
  //   service.searchProjects('test').subscribe(projects => {
  //     expect(projects.length).toBeGreaterThan(0);
  //   });
  // });
});
