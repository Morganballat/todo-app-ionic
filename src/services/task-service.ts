import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from 'src/app/pages/task/models/task';
import { MOCK_PROJECTS } from 'src/app/mock-data/project.mock';
import { Project } from 'src/app/pages/project/models/project';
import { ProjectService } from './project-service';
import { Storage } from '@ionic/storage-angular';


@Injectable({
    providedIn: 'root'
})
export class TaskService
{

    constructor(private storage: Storage)
    {
        this.storage.create();
    }

    saveTask(task: string): Promise<any>
    {
        return this.storage.set('task', task);
    }

    getTask(): Promise<any>
    {
        return this.storage.get('task');
    }

    removeTask(): Promise<any>
    {
        return this.storage.remove('task');
    }

}
