import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogboxComponent } from '../dialogbox/dialogbox.component';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent {
    constructor(public dialog:MatDialog){}
     
    openDialog():void{
      this.dialog.open(DialogboxComponent)
    }
  
  }


