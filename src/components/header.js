import React from "react";
import { Link } from "gatsby";

const Header = () => (
  <header className="pa4 mb2 tc">
    <h1 className="ma0 f3 dejavu">
      <Link to="/">დავით კვარაცხელია</Link>
    </h1>
    <p className="geo-text gray">["აღწერა"]</p>
  </header>
);

export default Header;
