import React from 'react';
import s from './ContactsForm.module.css';

export default function ContactsForm({ name, number, onChange, onSubmit }) {
  return (
    <form className={s.box_form} onSubmit={onSubmit}>
      <h2>Name</h2>
      <input
        type="text"
        name="name"
        value={name}
        onChange={onChange}
        required
      />
      <h2>Number</h2>
      <input
        type="tel"
        name="number"
        value={number}
        onChange={onChange}
        required
      />
      <button type="submit">Add contact</button>
    </form>
  );
}
