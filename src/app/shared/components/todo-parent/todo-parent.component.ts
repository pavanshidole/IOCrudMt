import { Component, OnInit, ViewChild } from '@angular/core';
import { Itodos } from '../../model/todo';
import { NgForm } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { SnackbarService } from '../../service/snackbar.service';

@Component({
  selector: 'app-todo-parent',
  templateUrl: './todo-parent.component.html',
  styleUrls: ['./todo-parent.component.scss']
})
export class TodoParentComponent implements OnInit {

  constructor(
    private _snackbar:SnackbarService
  ){}

  isHide !:boolean 

  ngOnInit(): void {
    const todoArray=localStorage.getItem('todoarr');
    if(todoArray){
      this.todoArr=JSON.parse(todoArray);
    }
  }

  todoArr:Array<Itodos>=[
    {
      todoItem:'js',
      todoId:'120',
    },
    {
      todoItem:'ts',
      todoId:'121',
    },
    {
      todoItem:'Angular',
      todoId:'122',
    },

  ]

  uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
    .replace(/[xy]/g, function (c) {
        const r = Math.random() * 16 | 0, 
            v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

  @ViewChild('todoform') todoform !:NgForm;

  onSubmit(){
    if(this.todoform.valid){
      let newTodoObj={...this.todoform.value, todoId:this.uuid()}

      this.todoArr.push(newTodoObj);
      localStorage.setItem('todoarr',JSON.stringify(this.todoArr));
      this.todoform.reset()
      this._snackbar.openSnackbar(`in todolist todoitem ${newTodoObj.todoItem} is added successfully`)
    }
  }

  onEdit(todo:Itodos){
    if(todo){
      this.todoform.form.patchValue(todo);
      localStorage.setItem('editid',todo.todoId);
      this.isHide=true
    }
  }

  onUpdate(){
    let newUpdateObj={...this.todoform.value, todoId:localStorage.getItem('editid')};
    let getIndex=this.todoArr.findIndex(todoObj=> todoObj.todoId===newUpdateObj.todoId);
    this.todoArr[getIndex]=newUpdateObj
    localStorage.removeItem('editId');
    this.isHide=false;
    localStorage.setItem('todoarr',JSON.stringify(this.todoArr));
    this.todoform.reset();
    this._snackbar.openSnackbar(`in todolist todoitem ${ newUpdateObj.todoItem} is updated successfully`)
  }

}
