import { Link } from "react-router";

function Menu() {
  return (
    <div className="menu">
      <Link to={"/contacts"}>Contacts</Link>
      <Link to={"/addContact"}>Add contact</Link>
    </div>
  );
}

export default Menu;