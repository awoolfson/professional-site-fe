import { menuItemsData } from '../MenuItemsData.jsx'
import MenuItems from './MenuItems.jsx'

const Navbar = () => {
  return (
    <nav className="desktop-nav">
      <ul className="menus">
        {menuItemsData.map((menu, index) => {
            return <MenuItems items={menu} key={index} />;
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
