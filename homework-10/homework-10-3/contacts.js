const contactBook = {
    contacts: [
        {
            name: "Іван Петренко",
            phone: "+380501234567",
            email: "ivan.petrenko@example.com"
        }, {
            name: "Олена Коваль",
            phone: "+380671112233",
            email: "olena.koval@example.com"
        }, {
            name: "Максим Шевченко",
            phone: "+380931234567",
            email: "maksym.shevchenko@example.com"
        }
    ],
    addNewContact: function (name, phone, email) {
        contactBook
            .contacts
            .push({"name": name, "phone": phone, "email": email});
    },
    findContactForName: function (name) {
        return contactBook
            .contacts
            .find(contact => contact.name === name);
    }
};