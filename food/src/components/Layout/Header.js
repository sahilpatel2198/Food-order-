import { Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton";
import mealsImage from "../../Assets/pexels.jpg";
import classes from "../Layout/Header.module.css";
import { Link } from "react-router-dom";
import Login from "../Login/Login";
import "bootstrap/dist/css/bootstrap.min.css";
//  import { Link } from "react-router-dom";
const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>FOOD ORDER</h1>

        {props.user && (
          <>
            <HeaderCartButton onClick={props.onShowCart} />
              

            <button
              onClick={props.logout}
              className="HeaderCartButton_button__60lMx"
            >
              Logout
            </button>
          </>
        )}
        {!props.user && (
          <Link to="/login" className="HeaderCartButton_button__60lMx">
            Login
          </Link>
        )}
      </header>

      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="a table full of delicious food!" />
      </div>
      
    </Fragment>
  );
};
export default Header;
