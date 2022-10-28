const CONTACTS_LS_KEY = 'phonebookContacts';

export const getContactsFromLS = () => {
  const contacts = localStorage.getItem(CONTACTS_LS_KEY);

  const parsedContacts = JSON.parse(contacts);

  return parsedContacts;
};

export const setContactsToLS = contacts =>
  localStorage.setItem(CONTACTS_LS_KEY, JSON.stringify(contacts));
