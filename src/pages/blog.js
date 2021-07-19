import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import { MDXRenderer } from "gatsby-plugin-mdx";

const Blog = ({ data }) => {
  return (
    <Layout pageTitle="My Blog posts">
      <ul>
        {data.allMdx.nodes.map((item) => (
          <article key={item.id}>
            <h2>{item.frontmatter.title}</h2>
            <p>Posted: {item.frontmatter.date}</p>
            <MDXRenderer>{item.body}</MDXRenderer>
          </article>
        ))}
      </ul>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { order: DESC, fields: frontmatter___date }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D,YYYY")
          title
        }
        id
        body
      }
    }
  }
`;
export default Blog;
