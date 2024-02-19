import React from 'react';
import s from './ContactList.module.css';

export default function ContactList({
  filter,
  contacts,
  onChange,
  onDeleteContact,
}) {
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase()?.includes(filter.toLowerCase())
  );

  return (
    <div>
      <h2>Filter</h2>
      <input type="text" name="filter" value={filter} onChange={onChange} />
      <ul className={s.list}>
        {filteredContacts.map(contact => (
          <li className={s.item} key={contact.id}>
            <p>
              {contact.name}: {contact.number}
            </p>
            <button onClick={() => onDeleteContact(contact.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
