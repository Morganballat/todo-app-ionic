import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MockProjectService } from 'src/services/mock-project-service';
import { Project } from '../project/models/project';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.page.html',
  styleUrls: ['./project-form.page.scss'],
})
export class ProjectFormPage implements OnInit
{
  public form!: FormGroup;

  constructor(
    private projectService: MockProjectService,
    private router: Router
  ) { }

  ngOnInit()
  {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      priority: new FormControl(0, Validators.required)
    });
  }

  createProject()
  {
    const project = new Project();
    project.name = this.form.value.name;
    project.priority = this.form.value.priority;

    this.projectService.createProject(project).subscribe(
      (response) =>
      {
        console.log(response);
        this.router.navigate(['/project/' + response.id]);

      });
  }

}
