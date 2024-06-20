import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-validation',
  standalone:true,
  imports:[
    FormsModule
  ],
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.scss']
})
export class VALIDATIONComponent {constructor(private router: Router) {
  
    
}
public data ={civilité:"", first_name :"",last_name:"" }



onSubmit (){

console.log("i m subbmit successfly", this.data )


}

goto(){
this.router.navigate(['/register/validation1'])
}



}
