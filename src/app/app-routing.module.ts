import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'project/:projectId',
    loadChildren: () => import('./pages/project/project.module').then(m => m.ProjectPageModule)
  },
  {
    path: ':projectId/tasks',
    loadChildren: () => import('./pages/task/task.module').then(m => m.TaskPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/auth/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'project-form',
    loadChildren: () => import('./pages/project-form/project-form.module').then(m => m.ProjectFormPageModule)
  },
  {
    path: 'task-form/:projectId',
    loadChildren: () => import('./pages/task-form/task-form.module').then(m => m.TaskFormPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }