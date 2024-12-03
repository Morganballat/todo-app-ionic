import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from 'src/app/task/models/task';

@Injectable({
    providedIn: 'root'
})
export class MockTaskService
{
    private projects = [
        {
            id: 1,
            name: 'Project 1',
            tasks: [
                { id: 1, name: 'Task 1' },
                { id: 2, name: 'Task 2' }
            ]
        },
        {
            id: 2,
            name: 'Project 2',
            tasks: [
                { id: 3, name: 'Task 3' }
            ]
        }
    ];

    getTask(projectId: number, taskId: number): Observable<Task | undefined>
    {
        const project = this.projects.find(p => p.id === projectId);
        if (project)
        {
            return of(project.tasks.find(t => t.id === taskId));
        }
        return of(undefined);
    }

    createTask(projectId: number, task: any): Observable<any>
    {
        const project = this.projects.find(p => p.id === projectId);
        if (project)
        {
            task.id = (project.tasks.length + 1).toString();
            project.tasks.push(task);
        }
        return of(task);
    }

    updateTask(projectId: number, taskId: number, task: any): Observable<any>
    {
        const project = this.projects.find(p => p.id === projectId);
        if (project)
        {
            const index = project.tasks.findIndex(t => t.id === taskId);
            if (index !== -1)
            {
                project.tasks[index] = task;
            }
        }
        return of(task);
    }

    deleteTask(projectId: number, taskId: number): Observable<any>
    {
        const project = this.projects.find(p => p.id === projectId);
        if (project)
        {
            project.tasks = project.tasks.filter(t => t.id !== taskId);
        }
        return of(null);
    }
}