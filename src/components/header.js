import React from "react";
import { Link } from "gatsby";

const Header = ({ siteTitle }) => (
  <header className="pa3">
    <div className="mw7 center pb3 bb b--black-10">
      <h1 className="ma0 tc dejavu">
        <Link to="/">დათოს ბლოგი</Link>
      </h1>
    </div>
  </header>
);
export default Header;
