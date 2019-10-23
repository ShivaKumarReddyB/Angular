import { Component, OnInit } from "@angular/core";
// import  FormBuilder, FormGroup form angular Forms
import { FormBuilder, FormGroup,FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-reactiveforms",
  templateUrl: "./reactiveforms.component.html",
  styleUrls: ["./reactiveforms.component.css"]
})
export class ReactiveformsComponent implements OnInit {


  form = this.fb.group({
    email: ['', Validators.required],
    username: "",
    password: ""
  });

  constructor(private fb: FormBuilder) {}
  // form = new FormGroup({
  //   email: new FormControl(''),
  //   username: new FormControl(''),
  // });
  ngOnInit() {
    // this.form.valueChanges.subscribe(console.log);
  }
}
