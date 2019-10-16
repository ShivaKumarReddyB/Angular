import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  add: any;
  index: any;

 array: any[] = ['complete the angular ','recharge the phone'];
 onclick() {
   this.array.push(this.add)
   console.log('f')

}
onKeydown(event){
  this.array.push(this.add)
  console.log(event)
}
delete(index){
  this.array.splice(index,1)
  console.log(index)

}


  constructor() { }

  ngOnInit() {
  }

}
