import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/services/project-service';
import { Project } from './models/project';
import { ActivatedRoute, Router } from '@angular/router';
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
    private router: Router,
    private projectService: ProjectService,
    private taskService: TaskService

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
  }

  deleteTask(task: Task)
  {
    this.taskService.removeTask(task);
  }

  updateTask(id: any)
  {
    this.router.navigate(['/task-update', id]);
  }

  completeTask(task: Task)
  {
    this.taskService.completeTask(task.id).then(
      (response) =>
      {
        console.log(response);
      });
  }
}
