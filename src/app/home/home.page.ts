import { Component } from '@angular/core';
import { Project } from '../project/models/project';
import { MockProjectService } from 'src/services/mock-project-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage
{

  public projects!: Project[];

  constructor(

    private projectService: MockProjectService,
    private router: Router
  ) { }


  ngOnInit()
  {
    this.projectService.getProjects().subscribe(projects =>
    {
      this.projects = projects;
    });
  }

  projectSelected(projectId: number)
  {
    this.router.navigate(['/project', projectId]);
  }

}
