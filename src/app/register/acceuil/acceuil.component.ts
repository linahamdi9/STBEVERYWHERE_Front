import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-acceuil',
  imports:[
    CommonModule,
    FormsModule
    
  ],
  standalone:true,
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.scss']
})
export class AcceuilComponent { 
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
  