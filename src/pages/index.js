import React from "react";
import { graphql } from "gatsby";
import Post from "../components/PostItem";

import Layout from "../components/layout";

export default ({ data }) => (
  <Layout>
    <div className="posts" style={{ maxWidth: 580, margin: `0 auto` }}>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <Post
          key={node.id}
          to={node.fields.slug}
          date={node.frontmatter.date}
          title={node.frontmatter.title}
        />
      ))}
    </div>
  </Layout>
);

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;
