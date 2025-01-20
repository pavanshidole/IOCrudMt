import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Istd } from '../../model/std';

@Component({
  selector: 'app-std-child',
  templateUrl: './std-child.component.html',
  styleUrls: ['./std-child.component.scss']
})
export class StdChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() getstdArr !:Array<Istd>
  @Output() editObj:EventEmitter<Istd>=new EventEmitter<Istd>()

  onRemove(std:Istd){
    let confirmed=confirm();
    if(confirmed){
      let removeId=this.getstdArr.findIndex(stdObj=> stdObj.stdId===std.stdId);
      this.getstdArr.splice(removeId,1);
      localStorage.setItem('stdarr',JSON.stringify(this.getstdArr))
    }
  }

  onEdit(std:Istd){
    this.editObj.emit(std);
  }

}
