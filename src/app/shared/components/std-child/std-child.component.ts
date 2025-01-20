import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Istd } from '../../model/std';
import { SnackbarService } from '../../service/snackbar.service';

@Component({
  selector: 'app-std-child',
  templateUrl: './std-child.component.html',
  styleUrls: ['./std-child.component.scss']
})
export class StdChildComponent implements OnInit {

  constructor(
    private _snackbar:SnackbarService
  ) { }

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
      this._snackbar.openSnackbar(`in student table ${std.fname}  ${std.lname}student information is updated successfully`)
    }
  }

  onEdit(std:Istd){
    this.editObj.emit(std);
  }

}
