import React from "react";
import Helmet from "react-helmet";

import Header from "./header";
import "./style.css";

const Layout = ({ children }) => (
  <>
    <Helmet
      title={"დათოს ბლოგი"}
      meta={[{ name: "description", content: "Sample" }]}
    >
      <link
        rel="stylesheet"
        href="https://unpkg.com/tachyons@4.10.0/css/tachyons.min.css"
      />

      <html lang="ka" />
    </Helmet>
    <Header />
    <div className="mw7 pa3 center">{children}</div>
  </>
);

export default Layout;
