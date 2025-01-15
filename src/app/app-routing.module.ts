import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'project/:projectId',
    loadChildren: () => import('./pages/project/project.module').then(m => m.ProjectPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: ':projectId/tasks',
    loadChildren: () => import('./pages/task/task.module').then(m => m.TaskPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/auth/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'project-form',
    loadChildren: () => import('./pages/project-form/project-form.module').then(m => m.ProjectFormPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'task-form/:projectId',
    loadChildren: () => import('./pages/task-form/task-form.module').then(m => m.TaskFormPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfilePageModule),
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }