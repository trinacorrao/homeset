let today = new Date().toISOString().slice(0, 10);

export const testData = {
  [today]: [
    {
      task_name: 'Garbage Day',
      task_doer: 'Charles',
      ini_date: new Date(),
      frequency: 12,
      completed: ['2023-11-01', '2023-10-01'],
      reminder: 'Why do we have this as a string?',
      notes: 'Place bins to the right of the driveway',
      task_time: 0,
    },
    {
      task_name: 'Yard Work',
      task_doer: 'Amanda',
      ini_date: new Date(),
      frequency: 1,
      completed: [],
      reminder: 'Why do we have this as a string?',
      notes: 'Both Front and back yard',
      task_time: 16,
    },
    {
      task_name: 'Plumber',
      task_doer: 'Charles',
      ini_date: new Date(),
      frequency: 1,
      completed: [],
      reminder: 'Why do we have this as a string?',
      notes: null,
      task_time: 19,
    },
  ],
  '2023-12-05': [
    {
      task_name: 'Clean Cat Litter',
      task_doer: 'Amanda',
      ini_date: new Date(),
      frequency: 12,
      completed: ['2023-11-01', '2023-10-01'],
      reminder: 'Why do we have this as a string?',
      notes: '',
      task_time: 9,
    },
    {
      task_name: 'Shovel sidewalk for party',
      task_doer: 'Charles',
      ini_date: new Date(),
      frequency: 1,
      completed: [],
      reminder: 'Why do we have this as a string?',
      notes: 'Salt is in garage',
      task_time: 12,
    },
  ],
};
