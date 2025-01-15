import { Component, inject, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TaskService } from 'src/services/task-service';
import { Task } from '../task/models/task';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.page.html',
  styleUrls: ['./task-form.page.scss'],
})
export class TaskFormPage implements OnInit
{
  public form!: FormGroup;

  public projectId: number | undefined;

  constructor(
    private taskService: TaskService,
    private router: Router,
    private route: ActivatedRoute,

  ) { }

  ngOnInit()
  {
    const projectIdParam = this.route.snapshot.paramMap.get('projectId');
    this.projectId = projectIdParam ? parseInt(projectIdParam) : undefined;
    this.form = new FormGroup({
      name: new FormControl('', Validators.required)
    });
  }

  createTask()
  {
    const task = new Task();
    task.name = this.form.value.name;
    task.done = false;

    if (this.projectId === undefined)
    {
      return;
    }

    this.taskService.saveTask(this.projectId, task).then(
      (response) =>
      {
        this.router.navigate(['/project/' + this.projectId]);
      });
  }

}
