import { Fragment } from "react";
import reactDom from "react-dom";
// import React, { Fragment } from "react";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}/>;
};
const Modaloverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");
const Modal = (props) => {
  return (
    <Fragment>
      {reactDom.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
      {reactDom.createPortal(
        <Modaloverlay>{props.children}</Modaloverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
