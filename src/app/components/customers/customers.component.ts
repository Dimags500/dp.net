import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/Customer';



@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  headerTitleParent!: string;
  headerIconParent!: string;
  headerDescriptionParent!: string;



  constructor() {


  }



  ngOnInit() {
    this.headerTitleParent = "Customers";
    this.headerIconParent = "fas fa-user";
    this.headerDescriptionParent = "the Customers";
  }


}
