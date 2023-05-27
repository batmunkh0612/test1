import React from "react";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/">
      <img
        src="https://png.pngtree.com/png-clipart/20200226/original/pngtree-initial-s-logo-icon-design-template-elements-png-image_5314408.jpg"
        alt=""
      />
    </Link>
  );
}

export default Logo;
