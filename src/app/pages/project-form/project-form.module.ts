import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProjectFormPageRoutingModule } from './project-form-routing.module';

import { ProjectFormPage } from './project-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProjectFormPageRoutingModule,
    ReactiveFormsModule,

  ],
  declarations: [ProjectFormPage]
})
export class ProjectFormPageModule { }
