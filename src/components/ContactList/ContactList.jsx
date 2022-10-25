import PropTypes from 'prop-types';
import { Button, Contact, List, ListItem } from './ContactList.styled';

export const ContactList = ({ filteredContacts, onDelContact }) => {
  return (
    <List>
      {filteredContacts.map(({ id, name, number }) => (
        <ListItem key={id}>
          <Contact>
            {name}: {number}
          </Contact>
          <Button type="button" onClick={() => onDelContact(id)}>
            Delete
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

ContactList.propTypes = {
  filteredContacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onDelContact: PropTypes.func.isRequired,
};
