import { Component } from '@angular/core';
import { Project } from './pages/project/models/project';
import { User } from './pages/auth/login/model/user';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent
{

  private MOCK_PROJECTS: Project[] = [];
  private MOCK_TASKS: Task[] = [];
  private MOCK_USERS: User[] = [];

  constructor()
  {
    this.initLocalStorage();

  }

  private initLocalStorage()
  {
    const storedProjects = localStorage.getItem('projects');

    if (storedProjects)
    {
      this.MOCK_PROJECTS = JSON.parse(storedProjects);
    } else
    {
      localStorage.setItem('projects', JSON.stringify(this.MOCK_PROJECTS));
    }

    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks)
    {
      this.MOCK_TASKS = JSON.parse(storedTasks);
    } else
    {
      localStorage.setItem('tasks', JSON.stringify(this.MOCK_TASKS));
    }

    const storedUsers = localStorage.getItem('users');
    if (storedUsers)
    {
      this.MOCK_USERS = JSON.parse(storedUsers);
    } else
    {
      localStorage.setItem('users', JSON.stringify(this.MOCK_USERS));
    }

  }
}
