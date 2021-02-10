import { NotifierComponent } from './../partial/notifier/notifier.component';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotifierService {

  constructor(private snackBar: MatSnackBar) { }

  showNotification(displayMessage:string, buttonText:string,messageType:'error'|'success') {
    this.snackBar.openFromComponent(NotifierComponent, {
      data:{
        message: displayMessage,
        button: buttonText,
        type: messageType
      },
      duration: 5000,
      horizontalPosition: 'end',
      verticalPosition: 'bottom',
      panelClass: messageType
    })
  }
}
