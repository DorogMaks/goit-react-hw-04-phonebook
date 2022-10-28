import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import {
  getContactsFromLS,
  setContactsToLS,
} from 'helpers/localStorageOperations';
import { TitleApp, TitleContacts, Wrapper } from './App.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Luke Skywalker', number: '459-12-56' },
      { id: 'id-2', name: 'Leia Organa', number: '443-89-12' },
      { id: 'id-3', name: 'Han Solo', number: '645-17-79' },
      { id: 'id-4', name: 'Chewbacca', number: '227-91-26' },
      { id: 'id-5', name: 'Ahsoka Tano', number: '164-49-65' },
      { id: 'id-6', name: 'Boba Fett', number: '459-82-46' },
    ],
    filter: '',
  };

  componentDidMount() {
    const contactsFromLS = getContactsFromLS();

    if (contactsFromLS === null) {
      setContactsToLS(this.state.contacts);
    }

    if (contactsFromLS) {
      this.setState({ contacts: contactsFromLS });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      setContactsToLS(this.state.contacts);
    }
  }

  addContact = (name, number) => {
    const contact = {
      id: nanoid(5),
      name,
      number,
    };

    const checkingName = this.state.contacts.find(item => {
      return item.name === contact.name;
    });

    if (checkingName) {
      return alert(`${contact.name} is already in contacts`);
    }

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  delContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  handleFilter = evt => {
    this.setState({ filter: evt.currentTarget.value });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;

    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    return (
      <Wrapper>
        <TitleApp>Phonebook</TitleApp>
        <ContactForm onAddContact={this.addContact} />
        <TitleContacts>Contacts</TitleContacts>
        <Filter filter={this.state.filter} handleFilter={this.handleFilter} />
        <ContactList
          filteredContacts={this.getFilteredContacts()}
          onDelContact={this.delContact}
        />
      </Wrapper>
    );
  }
}
