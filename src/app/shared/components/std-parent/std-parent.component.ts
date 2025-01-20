import { Component, OnInit, ViewChild } from '@angular/core';
import { Istd } from '../../model/std';
import { NgForm } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { SnackbarService } from '../../service/snackbar.service';

@Component({
  selector: 'app-std-parent',
  templateUrl: './std-parent.component.html',
  styleUrls: ['./std-parent.component.scss']
})
export class StdParentComponent implements OnInit {

  isHide !:boolean
  constructor(
    private _snackbar:SnackbarService
  ){}

  ngOnInit(): void {
   const stdArray=localStorage.getItem('stdarr');
   if(stdArray){
    this.stdArr=JSON.parse(stdArray);
   }
  }

  stdArr:Array<Istd>=[
    {
      fname:'pavan',
      lname:'shidole',
      email:'ps@gmail.com',
      contact:9370195967,
      stdId:'120'
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


  @ViewChild('stdForm') stdForm !:NgForm;
  @ViewChild('contact') contact !:any
  onSubmit(){
    if(this.stdForm.valid){
      let newStdObj={...this.stdForm.value, contact:+(this.contact.value),stdId: this.uuid()}
      
      this.stdArr.push(newStdObj);
      localStorage.setItem('stdarr',JSON.stringify(this.stdArr));
      this.stdForm.reset();
      this._snackbar.openSnackbar(`in student table ${newStdObj.fname}  ${newStdObj.fname}student information is added successfully`)
    }
  }

  onEdit(std:Istd){
      if(std){
        this.stdForm.form.patchValue(std);
        localStorage.setItem('editid',std.stdId);
        this.isHide=true
      }
    }

    onUpdate(){
      let newUpdateObj={...this.stdForm.value, contact:+(this.contact.value), stdId:localStorage.getItem('editid')};
      let getIndex=this.stdArr.findIndex(stdObj=> stdObj.stdId===newUpdateObj.stdId);
      this.stdArr[getIndex]=newUpdateObj
      localStorage.removeItem('editId');
      this.isHide=false;
      localStorage.setItem('stdarr',JSON.stringify(this.stdArr));
      this.stdForm.reset();

      this._snackbar.openSnackbar(`in student table ${newUpdateObj.fname}  ${newUpdateObj.fname}student information is updated successfully`)
    }

}
