import {Component} from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {CloneService} from '../clone-service/clone-service';
import {ContactsService} from '../contacts-service/contacts-service';
import {Contact} from '../models/contact';

@Component({
  selector: 'contact-editor-component',
  templateUrl: 'app//contact-editor-component/contact-editor-component.html',
  styleUrls: ['app//contact-editor-component/contact-editor-component.css'],
  providers: [CloneService],
  directives: [],
  pipes: []
})
export class ContactEditorComponent {

    contact:Contact;

    constructor(
        private contactsService:ContactsService,
        private cloneService:CloneService<Contact>,
        private routeParams:RouteParams,
        private router:Router
    ) {
        let original = this.contactsService.getContact(this.routeParams.get('id'));
        this.contact = this.cloneService.createClone(original);
    }

    private returnToDetails() {
        this.router.navigate(['/ContactDetail', {id: this.contact.id}]);
    }

    save(contact:Contact) {
        this.cloneService.commitChanges();
        this.returnToDetails();
    }

    cancel(contact:Contact) {
        this.cloneService.abortChanges();
        this.returnToDetails();
    }

}
