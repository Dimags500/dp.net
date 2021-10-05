import { Component, OnInit } from '@angular/core';
import { Observer } from 'rxjs';
import { Contact } from 'src/app/models/Contact';
import { ContactsService } from 'src/app/services/contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
})
export class ContactsComponent implements OnInit {

  headerTitleParent!: string;
  headerIconParent!: string;
  headerDescriptionParent!: string;

  contacts: Array<Contact>;

  constructor(private contactsService: ContactsService) { }


  ngOnInit(): void {
    this.headerTitleParent = "Contacts";
    this.headerIconParent = "fas fa-envelope";
    this.headerDescriptionParent = "the contacts";

    // this.contactsService.contacts.then((x: Contact[]) => {
    //   this.contacts = x;
    // });

    this.contactsService.contacts.subscribe({
      next: (data) => {
        this.contacts = data;
      },
      error: (err: any) => {
        console.log(err);
      }
    });
  }



}
