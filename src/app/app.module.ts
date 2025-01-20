import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoParentComponent } from './shared/components/todo-parent/todo-parent.component';
import { TodoChildComponent } from './shared/components/todo-child/todo-child.component';
import { StdParentComponent } from './shared/components/std-parent/std-parent.component';
import { StdChildComponent } from './shared/components/std-child/std-child.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    TodoParentComponent,
    TodoChildComponent,
    StdParentComponent,
    StdChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSnackBarModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
