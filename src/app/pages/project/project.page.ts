import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/services/project-service';
import { Project } from './models/project';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from 'src/services/task-service';
import { Task } from '../task/models/task';
import { HomePage } from '../home/home.page';

@Component({
  selector: 'app-project',
  templateUrl: './project.page.html',
  styleUrls: ['./project.page.scss'],
})
export class ProjectPage implements OnInit
{
  homepage = HomePage;

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
        if (project)
        {
          this.project = project;

        } else
        {
          console.error('Project not found');
        }
      });
    }
  }

  deleteTask(task: Task)
  {
    this.taskService.removeTask(task);
    window.location.reload();
  }

  updateTask(id: any)
  {
    this.router.navigate(['/task-update', id]);
  }

  completeTask(task: Task)
  {
    console.log(task);
    this.taskService.completeTask(task.id).then(
      (response) =>
      {
        window.location.reload();
      });
  }

  goBack()
  {
    this.router.navigate(['/home']).then
      (() =>
      {
        window.location.reload();
      });
  }

  deleteProject()
  {
    this.projectService.deleteProject(this.project.id);
    this.router.navigate(['/home']).then
      (() =>
      {
        window.location.reload();
      });
  }

}
