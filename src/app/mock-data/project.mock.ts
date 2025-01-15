export const MOCK_PROJECTS = [
    {
        id: 1,
        userId: 1,
        priority: 1,
        name: 'Project 1',
        tasks: [
            { id: 1, projectId: 1, name: 'Task 1', done: false },
            { id: 2, projectId: 1, name: 'Task 2', done: false },
            { id: 3, projectId: 1, name: 'Task 3', done: true },
        ]
    },
    {
        id: 2,
        userId: 1,
        priority: 1,
        name: 'Project 2',
        tasks: [
            { id: 4, projectId: 2, name: 'Task 4', done: false },
            { id: 5, projectId: 2, name: 'Task 5', done: false },
            { id: 6, projectId: 2, name: 'Task 6', done: true },
        ]
    },
    {
        id: 3,
        userId: 2,
        priority: 1,
        name: 'Project 2',
        tasks: [
            { id: 7, projectId: 3, name: 'Task 7', done: false },
            { id: 8, projectId: 3, name: 'Task 8', done: false },
            { id: 9, projectId: 3, name: 'Task 9', done: true },
        ]
    }
];