import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Project } from 'src/app/pages/project/models/project';
import { MOCK_PROJECTS } from 'src/app/mock-data/project.mock';
import { UserService } from './user-service';

@Injectable({
    providedIn: 'root'
})
export class ProjectService
{
    private projects: Project[] = [];;
    private user = this.userService.getCurrentUser();

    private userProjects: Project[] = [];

    constructor(private userService: UserService)
    {

    }

    getProjects(): Observable<any[]>
    {
        const storedProjects = localStorage.getItem('projects');
        this.projects = storedProjects ? JSON.parse(storedProjects) : [];

        this.userProjects = this.projects.filter(p => p.userId === this.user.id) as Project[];

        return of(this.userProjects);

    }

    getProject(projectId: number): Observable<any>
    {

        const storedProjects = localStorage.getItem('projects');
        this.projects = storedProjects ? JSON.parse(storedProjects) : [];

        const project = this.projects.find(p => p.id === projectId);
        return of(project);
    }

    createProject(project: Project): Observable<any>
    {
        project.id = this.projects.length + 1;

        const storedProjects = localStorage.getItem('projects');

        if (storedProjects)
        {
            this.projects = JSON.parse(storedProjects);
        }

        project.tasks = [];
        project.userId = this.user.id;
        this.projects.push(project as { id: number; userId: number; priority: number, name: string; tasks: never[] });
        localStorage.setItem('projects', JSON.stringify(this.projects));
        return of(project);
    }

    deleteProject(projectId: number): Observable<any>
    {
        const storedProjects = localStorage.getItem('projects');
        this.projects = storedProjects ? JSON.parse(storedProjects) : [];

        const projectIndex = this.projects.findIndex(p => p.id === projectId);
        this.projects.splice(projectIndex, 1);
        localStorage.setItem('projects', JSON.stringify(this.projects));
        return of(this.projects);
    }
}