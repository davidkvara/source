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

      <h1 className="dejavu blog-title" style={{ color: `indianred` }}>
        {post.frontmatter.title}
      </h1>
      <div
        className="dejavu"
        style={{ lineHeight: `1.9`, marginBottom: "5rem" }}
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
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
