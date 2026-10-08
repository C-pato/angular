import { Component, input } from '@angular/core';

@Component({

  standalone: true,
  selector: 'app-tasks',
  styleUrl: './tasks.component.css',
  templateUrl: './tasks.component.html',
})
export class TasksComponent {
//   user = input<string>('user');
  // user = input<string>('username');


tasksList = [
  {
    id: 't1',
    userId: 'u1',
    title: 'Jasmines Task ',
    summary: 'This is task 1',
    dueDate: new Date('2023-06-01'),
  },
  {
    id: 't2',
    userId: 'u2',
    title: ' Emilys Task ',
    summary: 'This is task 2',
    dueDate: new Date('2023-06-02'),
  },
  {
    id: 't3',
    userId: 'u3',
    title: 'Marcus Task ',
    summary: 'This is task 3',
    dueDate: new Date('2023-06-03'),
  },
  {
    id: 't4',
    userId: 'u4',
    title: 'Dvaids Task ',
    summary: 'This is task 4',
    dueDate: new Date('2023-06-04'),
  },

    {
    id: 't4',
    userId: 'u5',
    title: 'Priya Task ',
    summary: 'This is task 5',
    dueDate: new Date('2023-06-04'),
  },

    {
    id: 't4',
    userId: 'u6',
    title: 'Arjun  Task ',
    summary: 'This is task 6',
    dueDate: new Date('2023-06-04'),
  },
];

userId = input.required<string>();

get userTasks(){
  return this.tasksList.filter(
    task => task.userId === this.userId()
  )
}

  formatDate(date: Date): string {
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  }
}