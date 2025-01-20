import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(
    private _snackbarService:MatSnackBar
  ){}

  openSnackbar(msg:string){
    this._snackbarService.open(msg,`close`,{
      horizontalPosition:'left',
      verticalPosition:'top',
      duration:3000
    })
  }
}
