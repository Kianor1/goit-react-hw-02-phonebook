import React, { Component } from 'react';

export default class ContactList extends Component {
  state = {
    contacts: this.props.contacts,
    filter: this.props.filter,
  };

  handleDeleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  handleChange = e => {
    this.setState({ filter: e.target.value });
    this.props.handleChange(e);
  };

  render() {
    const { filter, contacts } = this.state;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <>
        <input
          type="text"
          name="filter"
          value={filter}
          onChange={this.props.handleChange}
        />
        <ul>
          {filteredContacts.map(contact => (
            <li key={contact.id}>
              <p>
                {contact.name}: {contact.number}
              </p>
              <button onClick={() => this.handleDeleteContact(contact.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
