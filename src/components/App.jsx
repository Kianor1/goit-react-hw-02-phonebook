// App.jsx
import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactList from './ContactList/ContactList.jsx';

export default class App extends Component {
  state = {
    contacts: [
      { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
      { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
      { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
      { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
    ],

    filter: '',
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number, contacts } = this.state;
    if (
      contacts.some(
        contact => contact.name === name || contact.number === number
      )
    ) {
      alert(`${name} is already in contacts`);
      this.setState({ name: '', number: '' });
      return;
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { id: nanoid(), name, number }],
      name: '',
      number: '',
    }));
  };

  handleDeleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { name, number, contacts, filter } = this.state;

    return (
      <div>
        <h1>Phonebook</h1>
        <form onSubmit={this.handleSubmit}>
          <h2>Name</h2>
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            required
          />
          <h2>Number</h2>
          <input
            type="tel"
            name="number"
            value={number}
            onChange={this.handleChange}
            required
          />
          <button type="submit">Add contact</button>
        </form>
        <h2>Filter</h2>
        <ContactList
          contacts={contacts}
          onChange={this.handleChange}
          onDeleteContact={this.handleDeleteContact}
          filter={filter}
        />
      </div>
    );
  }
}
