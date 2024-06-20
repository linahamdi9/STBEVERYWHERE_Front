import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-informationfinancieres',
  imports:[
    FormsModule
  ],
  standalone:true,
  templateUrl: './informationfinancieres.component.html',
  styleUrls: ['./informationfinancieres.component.scss']
})
export class InformationfinancieresComponent {constructor(private router: Router) {
  
    
}
public data ={civilité:"", first_name :"",last_name:"" }



onSubmit (){

console.log("i m subbmit successfly", this.data )


}

goto(){
this.router.navigate(['/register/autresinformations'])
}



}
