import { Component, OnInit } from '@angular/core';
import { Project } from '../project/models/project';
import { ProjectService } from 'src/services/project-service';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth-service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit
{

  public projects!: Project[];
  isLoggedIn = false;

  constructor(
    private authService: AuthService,
    private projectService: ProjectService,
    private router: Router
  )
  { }

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
