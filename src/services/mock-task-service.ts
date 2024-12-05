import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from 'src/app/pages/task/models/task';

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

    getTask(projectId: number, taskId: number): Observable<Task | undefined>
    {
        const project = this.projects.find(p => p.id === projectId);
        if (project)
        {
            return of(project.tasks.find(t => t.id === taskId));
        }
        return of(undefined);
    }

    createTask(projectId: number, task: Task): Observable<any>
    {
        const project = this.projects.find(p => p.id === projectId);
        console.log(project);
        if (project)
        {
            task.id = (project.tasks.length + 1);
            project.tasks.push(task);
            console.log(project);
        }
        return of(project);
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