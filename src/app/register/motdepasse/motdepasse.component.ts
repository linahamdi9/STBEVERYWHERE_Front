import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';




@Component({
  selector: 'app-motdepasse',
  imports: [ 
    CommonModule,
        FormsModule
        ], 

  standalone: true,
  templateUrl: './motdepasse.component.html',
  styleUrls: ['./motdepasse.component.scss']
})
export class MotdepasseComponent {
  isSubmitted =  false;
  showMessage =  false;
 public data ={ email:"", civilit:"",phone:"", first_name :"",last_name:"" , date_naissance  :"" , paye:""}


  /**
   *
   */
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


alert ("Mot de passe validé")
this.router.navigate(['/register/signaturedesdocuments'])


}else{

  alert ("error")
}


  }

  goto(){

  }


}


