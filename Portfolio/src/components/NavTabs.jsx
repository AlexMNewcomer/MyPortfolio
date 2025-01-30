import { Link, useLocation } from 'react-router-dom';


function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    <header>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link
            to="/"
            className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
          >
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/AboutMe"
            className={currentPage === '/AboutMe' ? 'nav-link active' : 'nav-link'}
          >
            AboutMe
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/Contact"
            className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
          >
            Contact
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/Portfolio"
            className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}
          >
            Portfolio
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default NavTabs;
