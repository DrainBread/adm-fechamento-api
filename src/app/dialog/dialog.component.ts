import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';
 
@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {
  titulo: string;
  mensagem: string;
 
  constructor(public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogModel) {
    this.titulo = data.title;
    this.mensagem = data.message;
  }
  
  confirmar(): void {
    this.dialogRef.close(true);
  }
 
  dispensar(): void {
    this.dialogRef.close(false);
  }
}

export class DialogModel {
 
  constructor(public title: string, public message: string) {
  }
}

