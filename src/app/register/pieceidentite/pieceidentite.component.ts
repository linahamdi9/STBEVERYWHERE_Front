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

 image = "../assets/images/bg/Profile.png";
  selectedFiles: any;
  currentFileStep1: any;
  constructor(private router: Router) {
    
}
public data ={civilité:"", first_name :"",last_name:"" }



onSubmit (){

console.log("i m subbmit successfly", this.data )


}

goto(){
this.router.navigate(['/register/choixagence'])
}

// onFileSelected(event: any): void {
//   const File = event.target.files[0];
//   if (File) {
//     this.selectedFile = File;
//   }
// }

selectFile(event: any): void {
  console.log("sdkjfhdskjghdskj")
  this.selectedFiles = event.target.files;
  if (this.selectedFiles) {
    const file: File | null = this.selectedFiles.item(0);
    if (file) {
      console.log(file)
      this.currentFileStep1 = file;
      const reader = new FileReader();
      reader.onload = (e: any) => {
        console.log(e.target.result);
        if (e.target.result.includes("data:image/jpeg;base64,") || e.target.result.includes("data:image/png;base64,") || e.target.result.includes("data:image/jpg;base64,"))
          this.image = e.target.result;
      };
      reader.readAsDataURL(this.currentFileStep1);

    }

  }

}
}


