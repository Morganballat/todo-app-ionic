import { Component, inject, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TaskService } from 'src/services/task-service';
import { Task } from '../task/models/task';
import { ActivatedRoute, Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';


@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.page.html',
  styleUrls: ['./task-form.page.scss'],
})
export class TaskFormPage implements OnInit
{
  public form!: FormGroup;
  public updateProcess = false;
  public projectId: number | undefined;
  private taskId: string | null;
  imageUrl: string | undefined;


  constructor(
    private taskService: TaskService,
    private router: Router,
    private route: ActivatedRoute,

  )
  {

    this.form = new FormGroup({
      name: new FormControl('', Validators.required)
    });

    this.taskId = this.route.snapshot.paramMap.get('taskId');
    if (this.taskId)
    {
      this.updateProcess = true;

      this.taskService.getTask(parseInt(this.taskId)).then(task =>
      {
        this.form.patchValue({
          name: task.name
        });
      });

      this.form.patchValue({ name: 'task.name' });

    }
  }

  ngOnInit()
  {
    const projectIdParam = this.route.snapshot.paramMap.get('projectId');
    this.projectId = projectIdParam ? parseInt(projectIdParam) : undefined;

  }

  submit()
  {
    if (!this.updateProcess)
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

    } else
    {
      const task = new Task();
      task.name = this.form.value.name;
      task.done = false;

      if (this.projectId === undefined)
      {
        return;
      }

      this.taskService.updateTask(task).then(
        (response) =>
        {
          this.router.navigate(['/project/' + this.projectId]);
        });
    }

  }

  async takePhoto(): Promise<any>
  {
    try
    {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera,
      });

      const imageUrl = image.webPath;

      console.log('Image URL:', imageUrl);
      return imageUrl;
    } catch (error)
    {
      console.error('Camera issue:', error);
    }
  }




}
