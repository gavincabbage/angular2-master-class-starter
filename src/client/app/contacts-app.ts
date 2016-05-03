import {Component, OnInit} from 'angular2/core';
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';
import {ContactHeaderComponent} from './contact-header-component/contact-header-component';
import {Contact} from './models/contact';
import {ContactsService} from './contacts-service/contacts-service';
import {ContactsListComponent} from './contacts-list-component/contacts-list-component';
import {ContactDetailComponent} from './contact-detail-component/contact-detail-component';
import {ContactEditorComponent} from './contact-editor-component/contact-editor-component';
import {CloneService} from './clone-service/clone-service';

@Component({
    selector: 'contacts-app',
    template: `
        <contact-header-component></contact-header-component>
        <router-outlet></router-outlet>
    `,
    styleUrls: ['app/contacts-app.css'],
    directives: [ContactHeaderComponent, ROUTER_DIRECTIVES],
    providers: [ContactsService, ROUTER_PROVIDERS, CloneService]
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
    },
    {
        path: '/contacts/:id/edit',
        component: ContactEditorComponent,
        name: 'ContactEditor'
    }
])
export class ContactsApp {

}
