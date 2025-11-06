import { useState } from 'react';
import './App.css'
import AddContactPage from './pages/AddContactPage';
import ContactsList from './pages/ContactsList';
import Menu from './pages/Menu';
import { BrowserRouter, Route, Routes } from 'react-router';
import Page404 from './pages/Page404';

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem('contacts');
    return savedContacts ? JSON.parse(savedContacts) : [];
  });
  const [newContactName, setNewContactName] = useState("");
  const [newContactPhone, setNewContactPhone] = useState("");

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

  return (
    <>
      <BrowserRouter>
      <div className='wrap'>
        <Menu />
        <Routes>
          <Route path='/contacts' element={<ContactsList contacts={contacts} onDelete={deleteContact} />}/>
          <Route path='/addContact' element={<AddContactPage
            newContactName={newContactName}
            newContactPhone={newContactPhone}
            setNewContactName={setNewContactName}
            setNewContactPhone={setNewContactPhone}
            addContact={addContact}
          />}/>
          <Route path='*' element={<Page404 />} />
        </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
