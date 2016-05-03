import {Component, OnInit} from 'angular2/core';
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';
import {ContactHeaderComponent} from './contact-header-component/contact-header-component';
import {Contact} from './models/contact';
import {ContactsService} from './contacts-service/contacts-service';
import {ContactsListComponent} from './contacts-list-component/contacts-list-component';
import {ContactDetailComponent} from './contact-detail-component/contact-detail-component';

@Component({
    selector: 'contacts-app',
    template: `
        <contact-header-component></contact-header-component>
        <router-outlet></router-outlet>
    `,
    styleUrls: ['app/contacts-app.css'],
    directives: [ContactHeaderComponent, ROUTER_DIRECTIVES],
    providers: [ContactsService, ROUTER_PROVIDERS]
})
@RouteConfig([
    {
        path: '/',
        component: ContactsListComponent,
        name: 'ContactsList'
    },
    {
        path: '/contacts/:id',
        component: ContactDetailComponent,
        name: 'ContactDetail'
    }
])
export class ContactsApp {

}
