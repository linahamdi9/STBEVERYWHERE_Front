import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-beneficiere',
  imports: [ 

    FormsModule
    ], 
  standalone:true,
  templateUrl: './beneficiere.component.html',
  styleUrls: ['./beneficiere.component.scss']
})
export class BeneficiereComponent {constructor(private router: Router) {
  
    
}
public data ={civilité:"", first_name :"",last_name:"" }



onSubmit (){

console.log("i m subbmit successfly", this.data )


}

goto(){
this.router.navigate(['/register/'])
}



}
