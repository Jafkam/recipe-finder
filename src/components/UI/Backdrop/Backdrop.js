import React from "react";

import '../../../sass/components/_Backdrop.scss'

const Backdrop = ({ clicked, show }) =>
  show ? <div className="backdrop" onClick={clicked}></div> : null;

export default Backdrop;
