import { Component } from 'react';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  addContact = name => {
    const contact = {
      id: nanoid(5),
      name,
    };

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

    this.addContact(this.state.name);
    // this.props.onSubmit(this.state.name);

    this.setState({ name: '' });
  };

  render() {
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
            <button type="submit">Add contact</button>
          </form>

          <h2>Contacts</h2>
          <ul>
            {this.state.contacts.map(contact => (
              <li key={contact.id}>
                <p>{contact.name}</p>
                {/* <button type="button">Delete</button> */}
              </li>
            ))}
            <li></li>
          </ul>
        </div>
      </>
    );
  }
}
