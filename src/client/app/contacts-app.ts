import {Component} from 'angular2/core';
import {ContactHeaderComponent} from './contact-header-component/contact-header-component';
import {Contact} from './models/contact';
import {CONTACT_DATA} from './data/contact-data';

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
    directives: [ContactHeaderComponent]
})
export class ContactsApp {
    contacts:Array<Contact> = CONTACT_DATA;
}
