import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-validation1',


  imports:[
    CommonModule,
    FormsModule
  ],
  standalone:true,
  templateUrl: './validation1.component.html',
  styleUrls: ['./validation1.component.scss']
})
export class VALIDATION1Component {
  isSubmitted =  false;
  showMessage =  false;
 public data ={ code :""}


 constructor(private router: Router) {

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
  
  
  alert ("Code validé")
  this.router.navigate(['/register/informationcomplementaire'])
  
  
  }else{
  
    alert ("error")
  }
  
  
    }
  
    goto(){
  
    }
  
  
  }
  