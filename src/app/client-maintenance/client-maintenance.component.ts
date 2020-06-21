import { Component, OnInit } from '@angular/core';

import {  ActivatedRoute, ParamMap } from '@angular/router';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';


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
  constructor(private route: ActivatedRoute, private router : Router) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
          // Show loading indicator
      }

      if (event instanceof NavigationEnd) {
          // Hide loading indicator
          var tempurl = event.url.split('/app/clientmaintenance/')[1];
          if(tempurl == 'clientdetails'){
            this.subMenu = 'Client Details';
          }if(tempurl == 'clienttransactionsummary'){
            this.subMenu = 'Client Transaction Summary';
          }if(tempurl == 'purgeinactiveclients'){
            this.subMenu = 'Purge Inactive Clients';
          }

      }

      if (event instanceof NavigationError) {
          // Hide loading indicator

          // Present error to user
          console.log(event.error);
      }
  });

   }

  ngOnInit(): void {
    debugger
    
  }

  

}
