import { Link } from "react-router";

function Menu() {
  return (
    <div className="menu">
      <Link to={"/"}>Home</Link>
    <div>
      <Link to={"/contacts"}>Contacts</Link>
    </div>
    <div>
      <Link to={"/addContact"}>Add contact</Link>
    </div>
    </div>
  );
}

export default Menu;