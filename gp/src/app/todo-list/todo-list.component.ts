import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  add: any;

 array: any[] = [];
 onclick() {
   this.array.push(this.add)

}
onKeydown(event){
  this.array.push(this.add)
  console.log(event)
}


  constructor() { }

  ngOnInit() {
  }

}
