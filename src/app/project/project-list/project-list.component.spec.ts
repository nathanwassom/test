import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectListComponent } from './project-list.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularMaterialModule } from '../../angular-material/angular-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';
import { ProjectService } from '../../service/project.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { from, of } from 'rxjs';


describe('ProjectListComponent', () => {
  let component: ProjectListComponent;
  let fixture: ComponentFixture<ProjectListComponent>;
  let mockProjectService;
  let valueServiceSpy: jasmine.SpyObj<ProjectService>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('ProjectService', ['getProjects']);
    await TestBed.configureTestingModule({
      imports:[HttpClientModule,AngularMaterialModule,BrowserAnimationsModule],
      declarations: [ProjectListComponent],
      providers: [{
        provide: ProjectService,
        useValue: spy
     }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    // mockProjectService = TestBed.inject(ProjectService);

    // mockProjectService.getProjects.and.returnValue(from([]));

    mockProjectService = TestBed.inject(ProjectService);
    valueServiceSpy = TestBed.inject(ProjectService) as jasmine.SpyObj<ProjectService>;
  });

  it('should create', () => {
    // expect(component).toBeTruthy();

    valueServiceSpy.getProjects.and.returnValue(from([]));
  });

  // it('should filter data when searching', () => {
  //   const searchInput = fixture.debugElement.query(By.css('input[matInput]'));
  //   searchInput.nativeElement.value = 'Gestion A';
  //   searchInput.nativeElement.dispatchEvent(new Event('input'));

  //   fixture.detectChanges();

  //   const tableRows = fixture.debugElement.queryAll(By.css('mat-row'));
  //   expect(tableRows.length).toBe(1);
  //   expect(tableRows[0].nativeElement.textContent).toContain('Gestion A');
  // });
});
