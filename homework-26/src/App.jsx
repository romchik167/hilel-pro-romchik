import { useState } from 'react';
import './App.css'

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem('contacts');
    return savedContacts ? JSON.parse(savedContacts) : [];
  });
  const [newContactName, setNewContactName] = useState("");
  const [newContactPhone, setNewContactPhone] = useState("");
  const [isContactsVisible, setIsContactsVisible] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);

  function addContact (){
    if(!newContactName.trim() || !newContactPhone.trim()) return
    if(isNaN(newContactPhone)) return

    const newContact = {
      id: Date.now(),
      name: newContactName,
      phone: newContactPhone,
    }
    const updatedContacts = [...contacts, newContact];
    localStorage.setItem('contacts', JSON.stringify(updatedContacts));
    setContacts(updatedContacts);
    setNewContactName("");
    setNewContactPhone("");
  }
  
  function deleteContact(index){
    const updatedContacts = contacts.filter((_, i) => i !== index);
    localStorage.setItem('contacts', JSON.stringify(updatedContacts));
    setContacts(updatedContacts);
  }

  function toggleContacts() {
    setIsContactsVisible(!isContactsVisible);
  }

  function toggleForm() {
    setIsFormVisible(!isFormVisible);
  }

  return (
    <>
    <div className='wrap'>
      <div className='contacts-wrap'>
        <button type='button' className='contacts-btn' onClick={toggleContacts}>Contacts</button>
        {isContactsVisible && contacts.length > 0 && (
          <ul className='contacts-list'>
            {contacts.map((contact, index) => (
              <li key={contact.id}>
                {contact.name} : {contact.phone}
                <button onClick={() => deleteContact(index)} className="delete-btn">Delete</button>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className='add-contact'>
        <button className='add-contact-btn' onClick={toggleForm}>Add contact</button>
        {isFormVisible && (
          <form className='add-contacts-form'> 
            <input 
              type='text' 
              className='add-contacts-input' 
              placeholder='Enter name' 
              value={newContactName} 
              onChange={(e) => setNewContactName(e.target.value)}
            />
            <input 
              type='text' 
              className='add-contacts-input' 
              placeholder='Enter phone number' 
              value={newContactPhone} 
              onChange={(e) => setNewContactPhone(e.target.value)}
            />
            <button type='button' className='add-contact-form-btn' onClick={addContact}>Add</button>
          </form>
        )}
      </div>
    </div>
    </>
  )
}

export default App
