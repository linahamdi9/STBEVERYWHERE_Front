import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-informationcomplementaire',

  standalone:true,
  templateUrl: './informationcomplementaire.component.html',
  styleUrls: ['./informationcomplementaire.component.scss']
})
export class InformationcomplementaireComponent {constructor(private router: Router) {
  
    
}
public data ={civilité:"", first_name :"",last_name:"" }



onSubmit (){

console.log("i m subbmit successfly", this.data )


}

goto(){
this.router.navigate(['/register/informationfinancieres'])
}


}
