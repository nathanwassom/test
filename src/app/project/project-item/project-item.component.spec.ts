import { TestBed } from '@angular/core/testing';
import { ProjectItemComponent } from './project-item.component';

describe('ProjectItemComponent', () => {
  let component: ProjectItemComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectItemComponent ]
    });
    component = TestBed.createComponent(ProjectItemComponent).componentInstance;
  });

  it('should return "approuve" class when status is "Approuvé"', () => {
    const status = 'Approuvé';
    const result = component.getStatusClass(status);
    expect(result).toBe('approuve');
  });

  it('should return "validation" class when status is "Validation"', () => {
    const status = 'Validation';
    const result = component.getStatusClass(status);
    expect(result).toBe('validation');
  });

  it('should return "refuse" class when status is "Refusé"', () => {
    const status = 'Refusé';
    const result = component.getStatusClass(status);
    expect(result).toBe('refuse');
  });

  it('should return "inactif" class when status is "Inactif"', () => {
    const status = 'Inactif';
    const result = component.getStatusClass(status);
    expect(result).toBe('inactif');
  });

  it('should return "creation" class when status is "Création"', () => {
    const status = 'Création';
    const result = component.getStatusClass(status);
    expect(result).toBe('creation');
  });

  it('should return empty string for unknown status', () => {
    const status = 'Unknown';
    const result = component.getStatusClass(status);
    expect(result).toBe('');
  });
});
