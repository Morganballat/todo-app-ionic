import { Component, inject, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MockTaskService } from 'src/services/mock-task-service';
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
    private taskService: MockTaskService,
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

    console.log('Creating task for project ' + this.projectId);
    console.log(task);
    this.taskService.createTask(this.projectId, task).subscribe(
      (response) =>
      {
        console.log(response);
        this.router.navigate(['/project/' + response.id]);

      });
  }

}
