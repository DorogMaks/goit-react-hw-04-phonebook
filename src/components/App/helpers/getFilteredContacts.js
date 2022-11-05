export const getFilteredContacts = (inputValue, arrayToFilter) => {
  const normalizedFilter = inputValue.toLowerCase();

  return arrayToFilter.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};
