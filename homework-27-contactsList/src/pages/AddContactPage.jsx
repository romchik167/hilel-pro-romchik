function AddContactPage({
  newContactName,
  newContactPhone,
  setNewContactName,
  setNewContactPhone,
  addContact
}) {
  return (
    <form className="add-contacts-form">
      <input
        type="text"
        className="add-contacts-input"
        placeholder="Enter name"
        value={newContactName}
        onChange={(e) => setNewContactName(e.target.value)}
      />
      <input
        type="text"
        className="add-contacts-input"
        placeholder="Enter phone number"
        value={newContactPhone}
        onChange={(e) => setNewContactPhone(e.target.value)}
      />
      <button
        type="button"
        className="add-contact-form-btn"
        onClick={addContact}
      >
        Add
      </button>
    </form>
  );
}

export default AddContactPage;