import React from 'react';
import { Link } from 'react-router-dom';
import { PiBankLight } from "react-icons/pi";
import './style.scss';

interface NavLink {
  to: string;
  label: string;
}

interface NavProps {
  links: NavLink[];
}

const Nav: React.FC<NavProps> = ({ links }) => {
  return (
    <nav className='nav'>
      <PiBankLight color='white' size={30} />
      <ul className="nav-list">
        {links.map((link, index) => (
          <li key={index} className="nav-item">
            <Link to={link.to} className="nav-link">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
