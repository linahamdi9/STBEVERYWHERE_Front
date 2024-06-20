import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-mieuxvousconnaitre',
  imports: [
    FormsModule
  ],
  standalone: true,
  templateUrl: './mieuxvousconnaitre.component.html',
  styleUrls: ['./mieuxvousconnaitre.component.scss']
})
export class MIEUXVOUSCONNAITREComponent { constructor(private router: Router) {
  
    
}
public data ={civilité:"", first_name :"",last_name:"" }



onSubmit (){

console.log("i m subbmit successfly", this.data )


}

goto(){
this.router.navigate(['/register/validation'])
}


}


