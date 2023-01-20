import { Todo } from '../ToDo';
import { Component, OnInit, HostBinding } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import { NonNullableFormBuilder } from '@angular/forms';

@Component({
  selector: 'app-open-close',
  templateUrl: './open-close.component.html',
  styleUrls: ['./open-close.component.scss'],
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        height: '100%',
        opacity: 1,
        // backgroundColor: '#b2b2b2'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.0
      })),
      transition('open => closed', [
        animate('0s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ],
  // templateUrl: 'open-close.component.html',
  // styleUrls: ['open-close.component.scss']
})

export class OpenCloseComponent {
  isOpen = false;
  todos : Todo[] = [];
  newTodo : string;

  toggle() {
    this.isOpen = !this.isOpen;
  }
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
