import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-directives',
  templateUrl: './ng-directives.component.html',
  styleUrls: ['./ng-directives.component.css']
})
export class NgDirectivesComponent implements OnInit {
     phone: any[] =  ['asus', 'iphone', 'nokia', 'mi'];
      num:number = 0;

      people: any[] = [
        { name: 'Anderson', age: 35, city: 'Sao Paulo' },
         { name: 'John', age: 12, city: 'Miami' },
        { name: 'Peter', age: 22, city: 'New York' }
        ];









   working: boolean = true;

   changeOnClick() {
      this.working = ! this.working;
   }
  constructor() { }

  ngOnInit() {
  }

}
