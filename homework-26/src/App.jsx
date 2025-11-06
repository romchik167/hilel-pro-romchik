import { useState } from 'react';
import './App.css'
import AddContactPage from './components/AddContactPage';
import ContactsList from './components/ContactsList';
import Menu from './components/Menu';

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
      <Menu toggleContacts={toggleContacts} toggleForm={toggleForm} />

      <div className='contacts-wrap'>
        {isContactsVisible && contacts.length > 0 && (
          <ContactsList contacts={contacts} onDelete={deleteContact} />
        )}
      </div>

      <div className='add-contact'>
        {isFormVisible && (
          <AddContactPage
            newContactName={newContactName}
            newContactPhone={newContactPhone}
            setNewContactName={setNewContactName}
            setNewContactPhone={setNewContactPhone}
            addContact={addContact}
          />
        )}
      </div>
    </div>
    </>
  )
}

export default App
