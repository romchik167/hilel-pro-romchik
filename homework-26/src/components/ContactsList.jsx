function ContactsList({ contacts, deleteContact }) {
  if (contacts.length === 0) {
    return <p>No contacts yet.</p>;
  }

  return (
    <table className="contacts-table">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Phone</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((contact, index) => (
          <tr key={contact.id}>
            <td>{index + 1}</td>
            <td>{contact.name}</td>
            <td>{contact.phone}</td>
            <td>
              <button
                onClick={() => deleteContact(index)}
                className="delete-btn"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ContactsList;