import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/services/task-service';
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
    private TaskService: TaskService
  ) { }

  ngOnInit()
  {
    // this.TaskService.getTask(1, 1).subscribe(task =>
    // {
    //   if (task)
    //   {
    //     this.task = task;
    //   } else
    //   {
    //     // handle the case when task is undefined
    //     console.error('Task not found');
    //   }

    // });
    this.TaskService.getTask();
  }

  // deleteTask(id: number)
  // {
  //   this.TaskService.deleteTask(1, id);
  // }

  // addTask(taskName: string)
  // {
  //   this.TaskService.createTask(1, { name: taskName });
  // }
}
