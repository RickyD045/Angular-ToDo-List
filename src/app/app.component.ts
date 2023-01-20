import { Todo } from './ToDo';
import { Component, HostBinding } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    // animation triggers go here
  ]
})
export class AppComponent {
  todos : Todo[] = [];
  newTodo : string;

  saveTodo(){
    if(this.newTodo){
      	let todo = new Todo();
        todo.name = this.newTodo;
        todo.isCompleted = true
        this.todos.push(todo);
        this.newTodo = '';
    }else{
      alert('Please Enter Todo');
    }
  }

  done(id:number){
    this.todos[id].isCompleted = !this.todos[id].isCompleted;
  }

  remove(id:number){
    this.todos = this.todos.filter((v,i)=> i !== id);
  }
}
