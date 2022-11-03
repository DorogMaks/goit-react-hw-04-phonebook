import { useState } from 'react';
import { useLocalStorage } from 'hooks/useLocalStorageOperations';
import { CONTACTS_LS_KEY } from 'constants/localStorageKeys';
import { ContactForm } from '../ContactForm/ContactForm';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';
import { TitleApp, TitleContacts, Wrapper } from './App.styled';
import defaultContacts from '../../data/defaultContacts.json';

export const App = () => {
  const [contacts, setContacts] = useLocalStorage(
    CONTACTS_LS_KEY,
    defaultContacts
  );
  const [filter, setFilter] = useState('');

  const addContact = contact => {
    const checkingName = contacts.find(item => {
      return item.name === contact.name;
    });

    if (checkingName) {
      return alert(`${contact.name} is already in contacts`);
    }

    setContacts(prevState => [contact, ...prevState]);
  };

  const delContact = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

  const handleFilter = evt => {
    setFilter(evt.currentTarget.value);
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <Wrapper>
      <TitleApp>Phonebook</TitleApp>
      <ContactForm onAddContact={addContact} />
      <TitleContacts>Contacts</TitleContacts>
      <Filter filter={filter} handleFilter={handleFilter} />
      <ContactList
        filteredContacts={getFilteredContacts()}
        onDelContact={delContact}
      />
    </Wrapper>
  );
};
