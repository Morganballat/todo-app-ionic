import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/services/project-service';
import { Project } from './models/project';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from 'src/services/task-service';
import { Task } from '../task/models/task';

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
    const projectId = this.route.snapshot.paramMap.get('projectId');
    console.log(this.route.snapshot.paramMap);
    if (projectId)
    {
      console.log('ProjectPage projectId: ' + projectId);
      this.projectService.getProject(parseInt(projectId)).subscribe(project =>
      {

        this.project = project;
        console.log('ProjectPage project: ' + project);
      });
    }
  }

  deleteTask(task: Task)
  {
    this.taskService.removeTask(task);
  }

  updateTask(task: any)
  {
    this.taskService.updateTask(task).then(
      (response) =>
      {
        console.log(response);
      });
  }

  completeTask(task: Task)
  {
    task.done = true;
    this.taskService.completeTask(task.id).then(
      (response) =>
      {
        console.log(response);
      });
  }
}
