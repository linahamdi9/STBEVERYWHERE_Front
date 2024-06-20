import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-choixagence',
  imports: [ 

    FormsModule
    ], 
  standalone:true,
  templateUrl: './choixagence.component.html',
  styleUrls: ['./choixagence.component.scss']
})
export class ChoixagenceComponent {constructor(private router: Router) {
  
    
}
public data ={civilité:"", first_name :"",last_name:"" }



onSubmit (){

console.log("i m subbmit successfly", this.data )


}

goto(){
this.router.navigate(['/register/password'])
}



}
