import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-tasks',
  styleUrl: './tasks.component.css',
  templateUrl: './tasks.component.html',
})
export class TasksComponent {
//   user = input<string>('user');
  // user = input<string>('username');


tasksList = [
 
{
      id: "t1",
      userId: "u1",
      title: "Task 1",
      summary: "This is task 1",
      dueDate: new Date("2023-06-01"),
    },
        {
      id: "t2",
      userId: "u2",
      title: "Task 2",
      summary: "This is task 2",
      dueDate: new Date("2023-06-02"),
    },
        {
      id: "t3",
      userId: "u3",
      title: "Task 3",
      summary: "This is task 3",
      dueDate: new Date("2023-06-03"),
    },
        {
      id: "t4",
      userId: "u4",
      title: "Task 4",
      summary: "This is task 4",
      dueDate: new Date("2023-06-04"),
    }

]








}
