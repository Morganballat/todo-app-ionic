import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProjectService } from 'src/services/project-service';
import { Project } from '../project/models/project';
import { ActivatedRoute, Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.page.html',
  styleUrls: ['./project-form.page.scss'],
})
export class ProjectFormPage implements OnInit
{
  public form!: FormGroup;
  imageUrl: string | undefined;
  public project: Project | undefined;

  constructor(
    private projectService: ProjectService,
    private router: Router,
    private route: ActivatedRoute
  )
  {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      imageUrl: new FormControl('', Validators.required),
      priority: new FormControl(0, Validators.required)
    });

    const projectId = this.route.snapshot.paramMap.get('projectId');
    if (projectId)
    {
      this.projectService.getProject(parseInt(projectId)).subscribe(project =>
      {
        if (project)
        {
          this.project = project;

          this.form.patchValue({
            name: project.name,
            description: project.description,
            imageUrl: project.imageUrl,
            priority: project.priority
          });

        }
      });
    }
  }

  ngOnInit(): void
  {

    this.imageUrl = this.project?.imageUrl;
  }

  onSubmit()
  {
    if (!this.project)
    {
      const project = new Project();
      project.name = this.form.value.name;
      project.priority = this.form.value.priority;
      project.imageUrl = this.imageUrl || '';

      this.projectService.createProject(project).subscribe(
        (response) =>
        {
          this.router.navigate(['/project/' + response.id]);

        });
    } else
    {
      this.project.name = this.form.value.name;
      this.project.priority = this.form.value.priority;
      this.project.imageUrl = this.imageUrl || '';

      this.projectService.updateProject(this.project).subscribe(
        (response) =>
        {
          this.router.navigate(['/home']).then(() =>
          {
            window.location.reload();
          }
          );

        });
    }
  }

  goBack()
  {
    this.router.navigate(['/home']);
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

      return this.imageUrl;
    } catch (error)
    {
      console.error('Camera issue:', error);
    }
  }

}
