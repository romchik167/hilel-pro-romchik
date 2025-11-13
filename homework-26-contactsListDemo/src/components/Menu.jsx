function Menu({ toggleContacts, toggleForm }) {
  return (
    <div className="menu">
      <button className="contacts-btn" onClick={toggleContacts}>
        Contacts
      </button>
      <button className="add-contact-btn" onClick={toggleForm}>
        Add Contact
      </button>
    </div>
  );
}

export default Menu;