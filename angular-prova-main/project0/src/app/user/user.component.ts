import { Component, input, output } from '@angular/core';
import {User} from './user.model';
import {TasksComponent} from '../tasks/tasks.component';

@Component({
  imports: [TasksComponent],
  selector: 'app-user',
  styleUrl: './user.component.css',
  templateUrl: './user.component.html',
})
export class UserComponent {
 user = input.required<User>();
 select = output<string>();
 selected = input.required<boolean>();

  get imagePath(){
    return 'assets/users/' + this.user().avatar;
  }

  protected message: string = '';
  onSelectUser(){
    this.select.emit(this.user().id); 
    


    
  //  this.message = 'Hello world, ' + this.user().name + ' ' + this.user().id;

  }
}
