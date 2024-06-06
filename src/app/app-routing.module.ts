import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectRoutingModule } from './project/project.routing';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import("./project/project-list/project-list.component").then((m) => m.ProjectListComponent),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ProjectRoutingModule ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
