import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-informationfinancieres',
  imports:[
    FormsModule,
    CommonModule 
  ],
  standalone:true,
  templateUrl: './informationfinancieres.component.html',
  styleUrls: ['./informationfinancieres.component.scss']
})
export class InformationfinancieresComponent {
  professionnel:any

  options = [
    { id: 1, name: 'Option 1', value: 'Value 1' },
    { id: 2, name: 'Option 2', value: 'Value 2' },
    { id: 3, name: 'Option 3', value: 'Value 3' },
    // Add more options as needed
  ];
  
  selectedOption: any; // Variable to hold the selected option
  selectedValue: any; // Variable to hold the selected value
  
  onOptionSelect() {
    if (this.selectedOption == 0) {
      this.selectedValue = this.selectedOption.value;
      console.log('Selected value:', this.selectedValue);
      // Perform any other actions based on the selected option
    }
  }
  
  
  constructor(private router: Router) {
  
    
}
public data ={civilité:"", first_name :"",last_name:"" }



onSubmit (){

console.log("i m subbmit successfly", this.data )


}

goto(){
this.router.navigate(['/register/autresinformations'])
}

// Example array of options




}
