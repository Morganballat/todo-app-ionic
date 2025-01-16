import { Task } from '../../../pages/task/models/task';

export class Project
{
    id!: number;
    userId!: number;
    description!: string;
    name!: string;
    imageUrl!: string;
    tasks: Task[] | null | undefined;
    priority!: number;
}