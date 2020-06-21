import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {

  clientName = "ABC Company";
  shortName = "ABC";
  clientNumber = "ABC45687";
  naicsCode = "11121, Farming";
  addressCode = "3943094894";
  contactName = "Peter";
  altContactName = "Michael";
  addressLine1 = "#23 ,24th Cross";
  addressLine2 = "4th Block, Koramangala";
  city = "Bangalore";
  stateProvince = "karnataka";
  country = "INDIA";
  zipCode = "560056";
  name = "";
  email = "";
  saveClicked = false;
  constructor() { }

  ngOnInit(): void {
  }

  onSave(clientBasicDetailsForm: NgForm,addressDetailsForm: NgForm,
    contactDetailsForm: NgForm){      
    this.saveClicked = true;
    console.log('clientBasicDetailsForm',clientBasicDetailsForm.valid);
      console.log('addressDetailsForm',addressDetailsForm.valid);
      console.log('contactDetailsForm',contactDetailsForm.valid);
      if(!(clientBasicDetailsForm.valid && addressDetailsForm.valid && contactDetailsForm.valid)){
        window.alert("Please fill the mandatory fields");
      }else{
        window.alert("Saved Successfully");
      }
  }

}
