import { Link } from "react-router-dom";

function Menu() {
  return (
    <>
      <nav style={{ marginBottom: '20px', display: 'flex', gap: '15px' }}>
      <Link to="/" style={{ textDecoration: 'none', color: '#007bff' }}>Home</Link>
      <Link to="/list-page" style={{ textDecoration: 'none', color: '#007bff' }}>List</Link>
      <Link to="/add-task-page" style={{ textDecoration: 'none', color: '#007bff' }}>Add task</Link>
    </nav>
    </>
  );
}

export default Menu;