import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="nav-area">
        <Link to="/" className="logo">
          <img
            src="/logo.svg"
            alt="logo"
            height="35"
            width="35"
          />
        </Link>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;