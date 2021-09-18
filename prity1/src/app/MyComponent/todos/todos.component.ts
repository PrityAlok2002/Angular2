import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  a: any;
  todos:Todo[];

  constructor() {
    this.a=localStorage.getItem("todos")
if(this.a==null){
  this.todos=[]
}
else{
  this.todos=JSON.parse(this.a)
}
    
//     this.localItem = localStorage.getItem("todos");
//     if(this.localItem == null){
//       this.todos = [];
//         } 


// else{
  
//     // const jsonData = JSON.stringify(this.todos)
//     // localStorage.setItem('myData', jsonData)
 
// //  this.todos=JSON.parse("this.localItem")
 
    
//  }


      // else{
      //   this.todos=[ {
      //         slno: 1,
      //         title:'THIS IS AALO',
      //         desc:'Description1',
      //         active:true 
      //       }]
      // }
        // this.todos = [
      //   {
      //     slno: 1,
      //     title:'THIS IS AALO',
      //     desc:'Description1',
      //     active:true 
      //   },
      //   {
      //     slno: 2,
      //     title:'THIS IS MULI',
      //     desc:'Description2',
      //     active:true 
      //   },
      //   {
      //     slno: 3,
      //     title:'THIS IS GAZAR',
      //     desc:'Description3',
      //     active:true 
      //   },
      // ]
  }

  ngOnInit(): void {
  }

 deleteTodo(todo:Todo){
   console.log(todo); 
   const index = this.todos.indexOf(todo)
   this.todos.splice(index,1)
   localStorage.setItem("todos",JSON.stringify(this.todos))
 }

 addTodo(todo:Todo){
   console.log(todo);
   this.todos.push(todo);
   localStorage.setItem("todos",JSON.stringify(this.todos))
 }

}
