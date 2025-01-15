import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Project } from 'src/app/pages/project/models/project';

@Injectable({
    providedIn: 'root'
})
export class ProjectService
{
    private projects = [
        {
            id: 1,
            name: 'Project 1',
            tasks: [
                { id: 1, name: 'Task 1', done: false },
                { id: 2, name: 'Task 2', done: false }
            ]
        },
        {
            id: 1,
            name: 'Project 1',
            tasks: [
                { id: 1, name: 'Task 1', done: false },
                { id: 2, name: 'Task 2', done: false }
            ]
        },
        {
            id: 2,
            name: 'Project 2',
            tasks: [
                { id: 3, name: 'Task 3', done: false }
            ]
        }
    ];

    getProjects(userId: number): Observable<any[]>
    {
        const userProjects = this.projects.filter(p => p.id === userId);
        return of(userProjects);
    }

    getProject(projectId: number): Observable<any>
    {
        const project = this.projects.find(p => p.id === projectId);
        console.log('MockProjectService.getProject: ' + project);
        return of(project);
    }

    createProject(project: Project): Observable<any>
    {
        project.id = this.projects.length + 1;
        project.tasks = [];

        this.projects.push(project);
        return of(project);
    }

    deleteProject(projectId: number): Observable<any>
    {
        const index = this.projects.findIndex(p => p.id === projectId);
        if (index !== -1)
        {
            this.projects.splice(index, 1);
        }
        return of(undefined);
    }
}