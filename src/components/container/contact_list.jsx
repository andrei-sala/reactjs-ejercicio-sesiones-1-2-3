import React from 'react';
import { Contact } from '../../models/contact.class';
import ContactComponent from '../pure/contact';



const ContactListComponent = () => {
    
    const defaultContact = new Contact('Andrei', 'Sala', 'example@outlook.com', false)
    
    return (
        <div>
            <div>
                <h1>Contacto para emergencias:</h1>
            </div>

            <ContactComponent contact={defaultContact}></ContactComponent>

        </div>
    );

};


export default ContactListComponent;
