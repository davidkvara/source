import React from "react";
import { graphql } from "gatsby";
import Helmet from "react-helmet";

import Layout from "../components/layout";

require("prismjs/themes/prism-solarizedlight.css");

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <Helmet>
        <title>{post.frontmatter.title}</title>
      </Helmet>
      <div>
        <h2 className="geo-caps">{post.frontmatter.title}</h2>
        <div
          className="geo-text"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
