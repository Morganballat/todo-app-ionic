import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ProjectService
{
    private projects = [
        {
            id: '1',
            name: 'Project 1',
            tasks: [
                { id: '1', name: 'Task 1' },
                { id: '2', name: 'Task 2' }
            ]
        },
        {
            id: '2',
            name: 'Project 2',
            tasks: [
                { id: '3', name: 'Task 3' }
            ]
        }
    ];

    getProjects(): Observable<any[]>
    {
        return of(this.projects);
    }

    getProjectById(projectId: string): Observable<any>
    {
        const project = this.projects.find(p => p.id === projectId);
        return of(project);
    }
}