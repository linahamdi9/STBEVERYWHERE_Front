import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-autresinformations',
  imports:[
    FormsModule
  ],
  standalone:true,
  templateUrl: './autresinformations.component.html',
  styleUrls: ['./autresinformations.component.scss']
})
export class AutresinformationsComponent {constructor(private router: Router) {
  
    
}
public data ={civilité:"", first_name :"",last_name:"" }



onSubmit (){

console.log("i m subbmit successfly", this.data )


}

goto(){
this.router.navigate(['/register/cin'])
}


}
