import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectFormPage } from './project-form.page';

const routes: Routes = [
  {
    path: '',
    component: ProjectFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectFormPageRoutingModule {}
