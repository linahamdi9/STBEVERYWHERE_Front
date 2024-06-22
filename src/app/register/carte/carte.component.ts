import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carte',
  imports: [ 

    FormsModule
    ], 
  standalone:true,
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.scss']
})
export class CarteComponent {constructor(private router: Router) {
  
    
}
public data ={civilité:"", first_name :"",last_name:"" }



onSubmit (){

console.log("i m subbmit successfly", this.data )


}

goto(){
this.router.navigate(['/register/cheque'])
}



}
