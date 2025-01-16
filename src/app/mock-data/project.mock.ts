export const MOCK_PROJECTS = [
    {
        id: 1,
        userId: 1,
        description: "test",
        priority: 1,
        name: 'Project 1',
        imageUrl: 'assets/images/car.webp',
        tasks: [
            { id: 1, projectId: 1, name: 'Task 1', done: false },
            { id: 2, projectId: 1, name: 'Task 2', done: false },
            { id: 3, projectId: 1, name: 'Task 3', done: true },
        ]
    },
    {
        id: 2,
        userId: 1,
        description: "test",
        priority: 2,
        name: 'Project 2',
        imageUrl: 'https://img-31.ccm2.net/j60cqGnYMzqbFrpC_4Vj_gkD4xo=/1240x/smart/1af84ed3ba3042e5b3fef699fcd424b7/ccmcms-hugo/39581256.jpg',

        tasks: [
            { id: 4, projectId: 2, name: 'Task 4', done: false },
            { id: 5, projectId: 2, name: 'Task 5', done: false },
            { id: 6, projectId: 2, name: 'Task 6', done: true },
        ]
    },
    {
        id: 4,
        userId: 1,
        description: "test",
        priority: 3,
        name: 'Project 4',
        imageUrl: 'https://img-31.ccm2.net/j60cqGnYMzqbFrpC_4Vj_gkD4xo=/1240x/smart/1af84ed3ba3042e5b3fef699fcd424b7/ccmcms-hugo/39581256.jpg',

        tasks: [
            { id: 10, projectId: 4, name: 'Task 10', done: false },
            { id: 11, projectId: 4, name: 'Task 11', done: false },
            { id: 12, projectId: 4, name: 'Task 12', done: true },
        ]
    },
    {
        id: 3,
        userId: 2,
        description: "test",
        priority: 1,
        name: 'Project 3',
        imageUrl: 'https://img-31.ccm2.net/j60cqGnYMzqbFrpC_4Vj_gkD4xo=/1240x/smart/1af84ed3ba3042e5b3fef699fcd424b7/ccmcms-hugo/39581256.jpg',
        tasks: [
            { id: 7, projectId: 3, name: 'Task 7', done: false },
            { id: 8, projectId: 3, name: 'Task 8', done: false },
            { id: 9, projectId: 3, name: 'Task 9', done: true },
        ]
    }
];