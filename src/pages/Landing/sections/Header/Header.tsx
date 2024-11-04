import Button from "../../../../components/Button/Button";
import style from "./header.module.scss";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className={style.header}>
      <NavLink to="/">
        <a className={style.headerLogo} href="#">
          Some Company
        </a>
      </NavLink>

      <Button />
    </header>
  );
}

export default Header;
