import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-maintenance',
  templateUrl: './client-maintenance.component.html',
  styleUrls: ['./client-maintenance.component.css']
})
export class ClientMaintenanceComponent implements OnInit {
  subMenu = "Client Details";
  navLinks = [
    {path:'clientdetails', label:'Client Details'},
    {path:'clienttransactionsummary', label:'Client Transaction Summary'},
    {path:'purgeinactiveclients', label:'Purge Inactive Clients'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
