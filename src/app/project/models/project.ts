import { Task } from '../../task/models/task';

export class Project
{
    id!: number;
    name!: string;
    tasks: Task[] | [] = [];
}