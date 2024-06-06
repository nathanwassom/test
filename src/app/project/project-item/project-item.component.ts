import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss']
})
export class ProjectItemComponent {
  @Input() project: any;

  getStatusClass(status: string) {
    switch (status) {
      case 'Approuvé':
        return 'approuve';
      case 'Validation':
        return 'validation';
      case 'Refusé':
        return 'refuse';
      case 'Inactif':
        return 'inactif';
      case 'Création':
        return 'creation';
      default:
        return '';
    }
  }
}
