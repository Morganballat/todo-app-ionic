import { Injectable } from '@angular/core';
import { Task } from 'src/app/pages/task/models/task';
import { Project } from 'src/app/pages/project/models/project';
import { MOCK_TASKS } from 'src/app/mock-data/task.mock';
import { of } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class TaskService
{

    tasks: Task[] = MOCK_TASKS;
    projects: Project[] = [];

    constructor()
    {

    }

    saveTask(projectId: number, task: Task): Promise<any>
    {

        const count = this.countTasks();
        task.id = count + 1;

        const storedProjects = localStorage.getItem('projects');

        if (storedProjects)
        {
            this.projects = JSON.parse(storedProjects);
        }

        const project = this.projects.find(p => p.id === projectId);
        if (project)
        {
            project.tasks?.push({
                id: task.id, name: task.name, done: task.done,
                projectId: projectId
            });
            localStorage.setItem('projects', JSON.stringify(this.projects));
        }

        return of(task).toPromise();

    }

    completeTask(taskId: number): Promise<any>
    {
        const storedProjects = localStorage.getItem('projects');
        this.projects = storedProjects ? JSON.parse(storedProjects) : [];
        console.log(this.projects);

        this.projects.forEach(project =>
        {
            project.tasks?.forEach(task =>
            {
                if (task.id === taskId)
                {
                    if (task.done === true)
                    {
                        task.done = false;
                    }
                    else
                    {
                        task.done = true;
                    }
                }
            });
        });

        console.log(this.projects);

        localStorage.setItem('projects', JSON.stringify(this.projects));
        return Promise.resolve();

    }

    getTask(id: number): Promise<any>
    {

        const storedProjects = localStorage.getItem('projects');
        this.projects = storedProjects ? JSON.parse(storedProjects) : [];

        let task: Task | null = null;
        this.projects.forEach(project =>
        {
            project.tasks?.forEach(t =>
            {
                if (t.id === id)
                {
                    task = t;
                }
            });
        });

        if (task)
        {
            return Promise.resolve(task);
        } else
        {
            return Promise.reject('Task not found');
        }

    }

    removeTask(task: Task): Promise<any>
    {
        localStorage.removeItem('task');
        return Promise.resolve();
    }

    updateTask(task: Task): Promise<any>
    {

        const storedProjects = localStorage.getItem('projects');
        this.projects = storedProjects ? JSON.parse(storedProjects) : [];

        this.projects.forEach(project =>
        {
            project.tasks?.forEach(t =>
            {
                if (t.id === task.id)
                {
                    t.name = task.name;
                    t.done = task.done;
                }
            });
        });

        localStorage.setItem('projects', JSON.stringify(this.projects));
        return Promise.resolve()

    }

    countTasks(): number
    {
        this.projects = JSON.parse(localStorage.getItem('projects') || '[]');
        this.tasks = this.projects.reduce((acc, project) => acc.concat(project.tasks || []), [] as Task[]);

        return this.tasks.length;
    }

}
