import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pieceidentite',
  imports:[
    FormsModule
  ],
  standalone:true,
  templateUrl: './pieceidentite.component.html',
  styleUrls: ['./pieceidentite.component.scss']
})
export class PieceidentiteComponent {
  selectedFile: File | null = null;
  constructor(private router: Router) {
    
}
public data ={civilité:"", first_name :"",last_name:"" }



onSubmit (){

console.log("i m subbmit successfly", this.data )


}

goto(){
this.router.navigate(['/register/choixagence'])
}

onFileSelected(event: any): void {
  const File = event.target.files[0];
  if (File) {
    this.selectedFile = File;
  }
}


}


