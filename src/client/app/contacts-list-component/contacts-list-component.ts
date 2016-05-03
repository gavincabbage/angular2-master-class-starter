import {Component, OnInit} from 'angular2/core';
import {Contact} from '../models/contact';
import {ContactsService} from '../contacts-service/contacts-service';
import {ROUTER_DIRECTIVES, RouteParams} from 'angular2/router';

@Component({
  selector: 'contacts-list-component',
  templateUrl: 'app//contacts-list-component/contacts-list-component.html',
  styleUrls: ['app//contacts-list-component/contacts-list-component.css'],
  providers: [],
  directives: [ROUTER_DIRECTIVES],
  pipes: []
})
export class ContactsListComponent implements OnInit {

    contacts:Array<Contact>;

    constructor(private contactsService:ContactsService) {}

    ngOnInit() {
        this.contacts = this.contactsService.getContacts();
    }

}
