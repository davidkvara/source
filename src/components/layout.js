import React from "react";
import Helmet from "react-helmet";
import "../style.css"; // move to header maybe

import Header from "./header";

const Layout = props => (
  <>
    <Helmet
      title={"david kvaratskhelia"}
      meta={[{ name: "description", content: "list of people" }]}
    >
      <link
        rel="stylesheet"
        href="https://unpkg.com/tachyons@4.10.0/css/tachyons.min.css"
      />

      <html lang="ka" />
    </Helmet>
    <Header />
    <main className="main">{props.children}</main>
  </>
);

export default Layout;
