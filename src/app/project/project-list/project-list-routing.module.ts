import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectListPage } from './project-list.page';

const routes: Routes = [
  {
    path: '',
    component: ProjectListPage,
    children: [
      {
        path: '',
        loadChildren: () => import('./project-list.module').then(m => m.ProjectListPageModule)
      },
      {
        path: ':projectId',
        loadChildren: () => import('./project-list.module').then(m => m.ProjectListPageModule)
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
export class ProjectListPageRoutingModule { }