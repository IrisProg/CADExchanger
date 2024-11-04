import style from "./button.module.scss";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { NavLink } from "react-router-dom";


function Button() {
  return (
    <div className={style.buttonContact}>
      <NavLink to="/contact">
        <button>Contact us</button>
      </NavLink>
      
    </div>
  );
}

export default Button;
