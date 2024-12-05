import { Component, OnInit } from '@angular/core';
import { MockTaskService } from 'src/services/mock-task-service';
import { Task } from './models/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.page.html',
  styleUrls: ['./task.page.scss'],
})
export class TaskPage implements OnInit
{
  public task!: Task;

  constructor(
    private mockTaskService: MockTaskService
  ) { }

  ngOnInit()
  {
    this.mockTaskService.getTask(1, 1).subscribe(task =>
    {
      if (task)
      {
        this.task = task;
      } else
      {
        // handle the case when task is undefined
        console.error('Task not found');
      }

    });

  }

  deleteTask(id: number)
  {
    this.mockTaskService.deleteTask(1, id);
  }

  // addTask(taskName: string)
  // {
  //   this.mockTaskService.createTask(1, { name: taskName });
  // }
}
