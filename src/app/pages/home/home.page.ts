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
  {
    this.projectService.getProjects().subscribe((projects: Project[]) =>
    {
      this.projects = projects;
    });

    this.sortProjectsByPriority();
  }

  ngOnInit()
  {
    this.isLoggedIn = this.authService.isLoggedIn();

    if (!this.isLoggedIn)
    {
      this.router.navigate(['/login']);
    }





  }

  sortProjectsByPriority()
  {
    this.projects.sort((a, b) => a.priority - b.priority);
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

  getPriorityText(priority: number): string
  {
    switch (priority)
    {
      case 1:
        return 'haute';
      case 2:
        return 'moyenne';
      case 3:
        return 'basse';
      default:
        return '';
    }
  }

}
