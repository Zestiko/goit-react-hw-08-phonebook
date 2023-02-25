import { NavLink } from "react-router-dom";
import css from './Navigation.module.css'

export const Navigation = () => {
  const isLoggedIn = true;
  return (
    <nav>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? css.navLinkActive : css.link)}
      >
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink
          to="/phonebook"
          className={({ isActive }) =>
            isActive ? css.navLinkActive : css.link
          }
        >
          Phonebook
        </NavLink>
      )}
    </nav>
  );
}