import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// importing formsmodule
import {FormsModule} from '@angular/forms';
// importing  reactiveforms modules
import { ReactiveFormsModule   } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgDirectivesComponent } from './ng-directives/ng-directives.component';
import { FormsComponent } from './forms/forms.component';

import { TodoListComponent } from './todo-list/todo-list.component';
import { TestingComponent } from './testing/testing.component';
import { ReactiveformsComponent } from './reactiveforms/reactiveforms.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NgDirectivesComponent,
    FormsComponent,

    TodoListComponent,
    TestingComponent,
    ReactiveformsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
