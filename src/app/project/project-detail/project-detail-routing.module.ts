import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectDetailPage } from './project-detail.page';

const routes: Routes = [
  {
    path: '',
    component: ProjectDetailPage,
    children: [
      {
        path: '',
        loadChildren: () => import('./project-detail.module').then(m => m.ProjectDetailPageModule)
      },
      {
        path: ':projectId',
        loadChildren: () => import('./project-detail.module').then(m => m.ProjectDetailPageModule)
      },
      {
        path: ':projectId/tasks',
        loadChildren: () => import('../../task/task.module').then(m => m.TaskPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectDetailPageRoutingModule { }