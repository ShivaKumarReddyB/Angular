import { Component, OnInit } from '@angular/core';
import { UserSettings} from './userstting';


@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

 UserSetting:UserSettings ={
   name: 'shiva',
 };
  constructor() { }

  ngOnInit() {
  }

}
