import { Component, OnInit } from '@angular/core';
import { MockProjectService } from 'src/services/mock-project-service';
import { Project } from './models/project';
import { ActivatedRoute } from '@angular/router';
import { MockTaskService } from 'src/services/mock-task-service';

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
    private mockTaskService: MockTaskService

  ) { }

  ngOnInit()
  {
    console.log('ProjectPage ngOnInit');
    const projectId = this.route.snapshot.paramMap.get('projectId');
    console.log('ProjectPage projectId: ' + projectId);
    if (projectId)
    {
      this.projectService.getProject(parseInt(projectId)).subscribe(project =>
      {
        this.project = project;
        console.log('ProjectPage project: ' + project);
      });
    }
  }

  deleteTask(id: number)
  {
    this.mockTaskService.deleteTask(1, id);
  }

  completeTask(projectId: number, taskId: number)
  {
    this.mockTaskService.getTask(projectId, taskId).subscribe(task => 
    {
      if (task)
      {
        task.done = true;
        this.mockTaskService.updateTask(projectId, taskId, task);
        this.projectService.getProject(projectId).subscribe(updatedProject => 
        {
          this.project = updatedProject;
        });
      }
    });
  }
}
