import { Component, OnInit } from '@angular/core';
import { Project } from '../project/models/project';
import { ProjectService } from 'src/services/project-service';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth-service';
import { User } from '../auth/login/model/user';
import { UserService } from 'src/services/user-service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit
{

  public projects!: Project[];
  private currentUser: User;
  isLoggedIn = false;

  constructor(
    private authService: AuthService,
    private projectService: ProjectService,
    private router: Router,
    private userService: UserService
  )
  {
    this.currentUser = this.userService.getCurrentUser();
  }

  ngOnInit()
  {
    this.isLoggedIn = this.authService.isLoggedIn();

    if (!this.isLoggedIn)
    {
      this.router.navigate(['/login']);
    }


    this.projectService.getProjects().subscribe((projects: Project[]) =>
    {
      this.projects = projects;
    });

  }

  projectSelected(projectId: number)
  {
    this.router.navigate(['/project', projectId]);
  }

  deleteProject(id: number)
  {
    this.projectService.deleteProject(id);
    window.location.reload();
  }

}
