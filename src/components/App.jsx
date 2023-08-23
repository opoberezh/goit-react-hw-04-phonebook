
import { nanoid } from "nanoid";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import initialContacts from "./contactsList.json";
import { Layout } from "./Layout/Layout";
import { GlobalStyle } from "./GlobalStyled";
import { WrapperContainer } from "./App.styled";
import { useState } from "react";

export const App = () => {
 const [contacts, setContacts] = useState (initialContacts);
const [contactFilter, setContactFilter] = useState('')
};


const resetChanges = () =>{
  setContacts(initialContacts);
}

const addContact = newContact => {
  const existingContact = contacts.find(
    contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
  );
  
  if (existingContact) {
    toast.info(`${newContact.name} is already in contacts.`, {
      position: "top-right",
      autoClose: 2000,});
    return;
  }
  const newItem = {
    id: nanoid(),
    name: newContact.name,
    number: newContact.number,
  };

  setContacts(prevState => ({
    ...prevState, 
    newItem
  }));
};
 
  const visibleContactItems = contacts.filter(contact =>
    contact.name.toLowerCase().includes(contactFilter.toLowerCase())
  );

  return (
    <Layout>
      <WrapperContainer>
      <ContactForm onAdd={addContact} />
      <ContactList
        contacts={visibleContactItems}
        contactFilter={contactFilter}
        onChangeFilter={this.changeContactFilter}
        onDeleteContact={this.deleteContact}
        onReset={resetChanges}
      />
      <ToastContainer />
      </WrapperContainer>
      <GlobalStyle/>
    </Layout>
  );
