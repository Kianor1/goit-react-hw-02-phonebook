import React, { Component } from 'react';

export default class ContactList extends Component {
  handleDeleteContact = id => {
    this.props.onDeleteContact(id);
  };

  render() {
    const { filter, contacts, onDeleteContact } = this.props;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <>
        <input
          type="text"
          name="filter"
          value={filter}
          onChange={this.props.onChange}
        />
        <ul>
          {filteredContacts.map(contact => (
            <li key={contact.id}>
              <p>
                {contact.name}: {contact.number}
              </p>
              <button onClick={() => onDeleteContact(contact.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
