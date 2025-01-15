import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MOCK_PROJECTS } from 'src/app/mock-data/project.mock';
import { Project } from 'src/app/pages/project/models/project';

@Injectable({
    providedIn: 'root',
})
export class DataService
{
    private projects: Project[] = [];

    constructor(private router: Router)
    {

    }

    initLocalStorage()
    {
        if (!sessionStorage.getItem('user'))
        {
            console.log(this.projects);
            localStorage.setItem('projects', JSON.stringify(this.projects));
        }

    }





}
