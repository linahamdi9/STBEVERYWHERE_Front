import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cheque',
  imports: [ 

    FormsModule
    ], 
  standalone:true,
  templateUrl: './cheque.component.html',
  styleUrls: ['./cheque.component.scss']
})
export class ChequeComponent {constructor(private router: Router) {
  
    
}
public data ={civilité:"", first_name :"",last_name:"" }



onSubmit (){

console.log("i m subbmit successfly", this.data )


}

goto(){
this.router.navigate(['/register/beneficiere'])
}



}
