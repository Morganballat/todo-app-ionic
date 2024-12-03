import { Component, OnInit } from '@angular/core';
import { MockProjectService } from 'src/services/mock-project-service';
import { Project } from './models/project';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.page.html',
  styleUrls: ['./project.page.scss'],
})
export class ProjectPage implements OnInit
{

  public project!: Project;

  constructor(
    private route: ActivatedRoute,
    private projectService: MockProjectService,

  ) { }

  ngOnInit()
  {
    const projectId = this.route.snapshot.paramMap.get('projectId');

    if (projectId)
    {

      this.projectService.getProject(parseInt(projectId)).subscribe(project =>
      {
        this.project = project;
      });
    }

    console.log(this.project);

  }

}
