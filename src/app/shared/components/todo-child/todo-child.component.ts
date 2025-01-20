import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Itodos } from '../../model/todo';

@Component({
  selector: 'app-todo-child',
  templateUrl: './todo-child.component.html',
  styleUrls: ['./todo-child.component.scss']
})
export class TodoChildComponent implements OnInit {

  constructor() { }

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
    }
  }

  onEdit(todo:Itodos){
   this.EditObj.emit(todo);
  }

}
