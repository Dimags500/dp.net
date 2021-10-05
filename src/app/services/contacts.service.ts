import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from './../models/Contact';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(private http: HttpClient) { }


  public get contacts() {
    //const rtn = this.http.get("../../assets/data/contacts.json").toPromise() as Promise<Contact[]>;
    const rtn = this.http.get("../../assets/data/contacts.json") as Observable<Contact[]>;
    return rtn;
  }

}
