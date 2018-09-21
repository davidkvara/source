import React from "react";
import { Link, graphql } from "gatsby";
import styled from "styled-components";

import Layout from "../components/layout";

export default ({ data }) => (
  <Layout>
    <div className="posts">
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

const Post = ({ date, title, to }) => (
  <WrapperLink to={to}>
    <Time>{date}</Time>
    <Title>{title}</Title>
  </WrapperLink>
);

const WrapperLink = styled(Link)`
  padding: 0.8rem 4px;
  border-bottom: 1px dotted #c4c4c4;
  text-decoration: none;
  transition: 0.2s ease;
  display: block;

  &:hover {
    border-color: #111111;
  }
`;

const Time = styled.div`
  color: #999;
  font-size: 0.85rem;
  white-space: nowrap;
  width: 140px;
  display: inline-block;
  @media (max-width: 500px) {
    font-size: 0.8rem;
  }
`;

const Title = styled.div`
  font-size: 0.92rem;
  display: inline-block;
  color: #444;
  font-weight: 400;
  font-family: "geo-text";

  @media (max-width: 500px) {
    display: block;
    padding-top: 0.4rem;
  }
`;

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
