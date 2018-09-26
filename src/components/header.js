import React from "react";
import { Link } from "gatsby";

const Header = () => (
  <header className="pa4">
    <div className="mw7 tc center pb2">
      <h1 className="ma0 f3 dejavu">
        <Link to="/">დავით კვარაცხელია</Link>
      </h1>
      <p className="geo-text gray">["აღწერა"]</p>
    </div>
  </header>
);

export default Header;
