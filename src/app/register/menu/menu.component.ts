import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  imports: [ 

    FormsModule
    ], 
  standalone:true,
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {constructor(private router: Router) {
  
    
}
public data ={civilité:"", first_name :"",last_name:"" }



onSubmit (){

console.log("i m subbmit successfly", this.data )


}

goto(){
this.router.navigate(['/register/cheque'])
}



}
