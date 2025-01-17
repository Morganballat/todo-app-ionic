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
  task: Task | undefined;


  constructor(
    private taskService: TaskService,
    private router: Router,
    private route: ActivatedRoute,

  )
  {

    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      // imageUrl: new FormControl('', Validators.required),
      done: new FormControl(false, Validators.required)
    });

    this.taskId = this.route.snapshot.paramMap.get('taskId');
    if (this.taskId)
    {
      this.updateProcess = true;

      this.taskService.getTask(parseInt(this.taskId)).then(task =>
      {
        this.task = task
        this.form.patchValue({
          name: task.name,
          // imageUrl: task.imageUrl,
          done: task.done
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

  onSubmit()
  {
    if (!this.updateProcess)
    {
      const task = new Task();
      task.name = this.form.value.name;
      // task.imageUrl = this.imageUrl || '';
      task.done = false;

      if (this.projectId)
      {
        console.log('create Project ID:', this.projectId);
        this.taskService.saveTask(this.projectId, task).then(
          (response) =>
          {
            this.router.navigate(['/project/' + this.projectId]).then(() =>
            {
              window.location.reload();
            }
            );
          });
      }


    } else
    {

      if (this.task)
      {

        console.log('update this.task ID:', this.task);
        console.log('update Project ID:', this.projectId);
        this.task.name = this.form.value.name;
        // this.task.imageUrl = this.imageUrl || '';
        this.task.done = false;



        this.taskService.updateTask(this.task).then(
          (response) =>
          {
            console.log('update response:', response);
            // this.router.navigate(['/home']).then(() =>
            // {
            //   window.location.reload();
            //   }
            // );
          });
      }
    }
  }

  async takePhoto(): Promise<any>
  {
    try
    {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Camera,
      });

      this.imageUrl = image.dataUrl;

      console.log('Image URL:', this.imageUrl);
      return this.imageUrl;
    } catch (error)
    {
      console.error('Camera issue:', error);
    }
  }

  goBack()
  {
    this.router.navigate(['/home']);
  }




}
