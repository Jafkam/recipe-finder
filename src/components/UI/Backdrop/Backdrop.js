import React from "react";

import "./Backdrop.css";

const Backdrop = ({ clicked, show }) =>
  show ? <div className="backdrop" onClick={clicked}></div> : null;

export default Backdrop;