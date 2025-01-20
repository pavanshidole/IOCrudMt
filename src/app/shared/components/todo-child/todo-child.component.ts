import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Itodos } from '../../model/todo';
import { SnackbarService } from '../../service/snackbar.service';

@Component({
  selector: 'app-todo-child',
  templateUrl: './todo-child.component.html',
  styleUrls: ['./todo-child.component.scss']
})
export class TodoChildComponent implements OnInit {

  constructor(
    private _snackbar:SnackbarService
  ){}

  ngOnInit(): void {
  }


  @Input() getTodoArr !:Array<Itodos>;

  @Output() EditObj:EventEmitter<Itodos>=new EventEmitter<Itodos>()

  onRemove(todo:Itodos){
    let confirmed=confirm()
    if(confirmed){
      let removeId=this.getTodoArr.findIndex(todoObj=>todoObj.todoId===todo.todoId);
      this.getTodoArr.splice(removeId,1);
      
      localStorage.setItem('todoarr',JSON.stringify(this.getTodoArr));
      this._snackbar.openSnackbar(`in todolist ${todo.todoItem} todoitem is removed successfully`)
    }
  }

  onEdit(todo:Itodos){
   this.EditObj.emit(todo);
  }

}
