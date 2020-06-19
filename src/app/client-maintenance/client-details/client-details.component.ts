import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit(): void {
  }

}
