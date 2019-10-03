import { Component, OnInit } from '@angular/core';
import { UserSettings} from './userstting';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

 UserSetting: UserSettings = {
   name: null,
 };
 onSubmit(f: NgForm) {
   console.log('is working', f.valid);

 }
  constructor() { }

  ngOnInit() {
  }

}
