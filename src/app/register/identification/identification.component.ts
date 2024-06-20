import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {MatSnackBar , MatSnackBarHorizontalPosition , MatSnackBarVerticalPosition} from '@angular/material/snack-bar';

@Component({
  selector: 'app-identification',

  imports: [ 
CommonModule,
    FormsModule
    ], 
    standalone: true,
  templateUrl: './identification.component.html',
  styleUrls: ['./identification.component.scss']
})
export class IDENTIFICATIONComponent {
isSubmitted =  false;
  showMessage =  false;
 public data ={ email:"", civilit:"",phone:"", first_name :"",last_name:"" , date_naissance  :"" , paye:""}


  /**
   *
   */
  constructor(private router: Router , private _snackBar: MatSnackBar) {
  
    
  }



  onSubmit (){
this.isSubmitted = true
if (this.isSubmitted ){
  /* var snack  = this._snackBar.open("Identification Succes", "OK" ,{
  verticalPosition : 'bottom',
    horizontalPosition : 'center',
    
   
 
  });
 
  snack.onAction().subscribe(() => {
    snack.dismiss();
    this.router.navigate(['/register/lina'])
}); */


alert ("email exist")
this.router.navigate(['/register/lina'])


}else{

  alert ("error")
}


  }

  goto(){

  }


}
