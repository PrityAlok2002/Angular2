import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/Todo';
import { TodosComponent } from '../todos/todos.component';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  title: string
  desc: string

  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter(); 
  // slno=Todo[Todo.length-1].slno+1
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    const todo = {
      slno : 4,
      title : this.title,
      desc : this.desc,
      active : true
    }
    this.todoAdd.emit(todo);
  }
  
}
