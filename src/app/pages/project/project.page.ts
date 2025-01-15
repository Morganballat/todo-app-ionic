import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/services/project-service';
import { Project } from './models/project';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from 'src/services/task-service';

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
    private projectService: ProjectService,
    private taskService: TaskService

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

  // deleteTask(id: number)
  // {
  //   this.taskService.deleteTask(1, id);
  // }

  // completeTask(projectId: number, taskId: number)
  // {
  //   this.taskService.getTask(projectId, taskId).subscribe(task => 
  //   {
  //     if (task)
  //     {
  //       task.done = true;
  //       this.taskService.updateTask(projectId, taskId, task);
  //       this.projectService.getProject(projectId).subscribe(updatedProject => 
  //       {
  //         this.project = updatedProject;
  //       });
  //     }
  //   });
  // }
}
