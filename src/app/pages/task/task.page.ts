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

  }


}
