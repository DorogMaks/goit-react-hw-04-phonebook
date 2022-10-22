import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Luke Skywalker', number: '459-12-56' },
      { id: 'id-2', name: 'Leia Organa', number: '443-89-12' },
      { id: 'id-3', name: 'Han Solo', number: '645-17-79' },
      { id: 'id-4', name: 'Chewbacca', number: '227-91-26' },
    ],
    filter: '',
  };

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
      <div>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />

        <h2>Contacts</h2>
        <Filter filter={this.state.filter} handleFilter={this.handleFilter} />
        <ContactList filteredContacts={this.getFilteredContacts()} />
      </div>
    );
  }
}
