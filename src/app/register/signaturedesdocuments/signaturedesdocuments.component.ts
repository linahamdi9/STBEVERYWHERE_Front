import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signaturedesdocuments',
  imports:[
    CommonModule,
    FormsModule
    
  ],
  standalone:true,
  templateUrl: './signaturedesdocuments.component.html',
  styleUrls: ['./signaturedesdocuments.component.scss']
})
export class SignaturedesdocumentsComponent { 
  isSubmitted =  false;
  showMessage =  false;
  public data ={civilité:"", first_name :"",last_name:"" }
  
  constructor(private router: Router ) {
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
  
  
  alert ("success")
  this.router.navigate(['/register/lina'])
  
  
  }else{
  
    alert ("error")
  }
  
  
    }
  
    goto(){
  
    }
  
  
  }
  