import Dropdown from './Dropdown';
import { useState } from "react";
//import { useOnHoverOutside } from '../hooks/useOnHoverOutside';

const MenuItems = ({ items }) => {
  const [dropdown, setDropdown] = useState(false);

  const onMouseEnter = () => {
    setDropdown(true);
  };
   
  const onMouseLeave = () => {
    setDropdown(false);
  };

  return (
    <li 
      className="menu-items"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      >
      {items.submenu ? (
        <>
          <button 
            type="button" 
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            onHover={() => setDropdown((prev) => !prev)}
            >
            {items.title}{' '}
          </button>
          <Dropdown 
            submenus={items.submenu}
            dropdown={dropdown}
            />
        </>
      ) : (
        <a href={items.url}>{items.title}</a>
      )}
    </li>
  );
};

export default MenuItems;