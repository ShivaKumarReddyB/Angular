import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit {
 // tslint:disable-next-line: no-input-rename
 @Input(' parentData') public name;
 @Output() public chidEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
 fireEvent(){
  this.chidEvent.emit('hii vidyaSagar ')
 }


}
