import {Component, OnInit} from 'angular2/core';
import {Contact} from '../models/contact';
import {RouteParams, ROUTER_DIRECTIVES} from 'angular2/router';
import {ContactsService} from '../contacts-service/contacts-service';

@Component({
  selector: 'contact-detail-component',
  templateUrl: 'app//contact-detail-component/contact-detail-component.html',
  styleUrls: ['app//contact-detail-component/contact-detail-component.css'],
  providers: [],
  directives: [ROUTER_DIRECTIVES],
  pipes: []
})
export class ContactDetailComponent implements OnInit {

    contact:Contact;

    constructor(private contactsService:ContactsService, private routeParams:RouteParams) {}

    ngOnInit() {
        this.contact = this.contactsService.getContact(this.routeParams.get('id'));
    }

}
