import { Component } from 'react';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Luke Skywalker', number: '459-12-56' },
      { id: 'id-2', name: 'Leia Organa', number: '443-89-12' },
      { id: 'id-3', name: 'Han Solo', number: '645-17-79' },
      { id: 'id-4', name: 'Chewbacca', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  addContact = (name, number) => {
    const contact = {
      id: nanoid(5),
      name,
      number,
    };
    // console.log(contact);
    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  handleСhange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  };

  handleSubmit = evt => {
    evt.preventDefault();

    this.addContact(this.state.name, this.state.number);
    // this.props.onSubmit(this.state.name);

    this.setState({ name: '', number: '' });
  };

  handleFilter = evt => {
    this.setState({ filter: evt.currentTarget.value });
  };

  render() {
    const normalizedFilter = this.state.filter.toLowerCase();
    const visibleContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );

    return (
      <>
        <div>
          <h1>Phonebook</h1>

          <form autoComplete="off" onSubmit={this.handleSubmit}>
            <label>
              Name
              <input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                value={this.state.name}
                onChange={this.handleСhange}
              />
            </label>
            <label>
              Number
              <input
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                value={this.state.number}
                onChange={this.handleСhange}
              />
            </label>
            <button type="submit">Add contact</button>
          </form>

          <h2>Contacts</h2>
          <label>
            <input
              type="text"
              value={this.state.filter}
              onChange={this.handleFilter}
            />
          </label>

          <ul>
            {/* {this.state.contacts.map(contact => ( */}
            {visibleContacts.map(contact => (
              <li key={contact.id}>
                <p>
                  {contact.name}: {contact.number}
                </p>
                {/* <button type="button">Delete</button> */}
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  }
}
