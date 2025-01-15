import { Task } from '../../../pages/task/models/task';

export class Project
{
    id!: number;
    userId!: number;
    name!: string;
    tasks: Task[] | [] = [];
    priority!: number;
}