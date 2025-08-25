const addNewContact = function(name, phone, email){
    contactBook.contacts.push({"name": name, "phone": phone, "email": email});
}
const findContactForName = function(name){
   return contactBook.contacts.find(contact => contact.name === name);
}