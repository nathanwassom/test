import { NgModule } from "@angular/core";
import { ProjectListComponent } from "./project-list/project-list.component";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: '',
    component: ProjectListComponent,
    children: [{ path: 'project-list', component: ProjectListComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectRoutingModule {}
