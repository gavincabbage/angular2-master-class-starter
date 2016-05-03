import {Component} from 'angular2/core';
import {ContactHeaderComponent} from './contact-header-component/contact-header-component';
import {Contact} from './models/contact';
import {ContactsService} from './contacts-service/contacts-service';

@Component({
    selector: 'contacts-app',
    template: `
        <contact-header-component></contact-header-component>
        <ul class="collection">
            <li *ngFor="#contact of contacts" class="collection-item avatar">
                <img [src]="contact.image" alt="" class="circle">
                <span class="title">{{contact.name}}</span>
            </li>
        </ul>`,
    styleUrls: ['app/contacts-app.css'],
    directives: [ContactHeaderComponent],
    providers: [ContactsService]
})
export class ContactsApp {
    contacts:Array<Contact>;
    constructor(contactsService:ContactsService) {
        this.contacts = contactsService.getContacts();
    }
}
