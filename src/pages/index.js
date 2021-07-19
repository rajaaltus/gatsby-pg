import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import Layout from "../components/Layout";

// markup
const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle="Home Page">
        <p>I'm making this by following the gatsby tutorial.</p>
        <StaticImage alt="image" src="../images/image1.jpeg" />
      </Layout>
    </main>
  );
};

export default IndexPage;
