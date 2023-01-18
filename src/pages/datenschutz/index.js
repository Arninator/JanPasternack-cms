import * as React from "react";

import Layout from "../../components/Layout";
// import DatenschutzBlogRoll from "../../components/DatenschutzBlogRoll";

export default class DatenschutzBlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: ``,
            backgroundPosition: "0% 33%"
          }}
        >
        </div>
        <section className="section">
          <div className="container">
            <h1
              className="has-text-weight-bold is-size-1 flex center"
              style={{
                // boxShadow: "0.5rem 0 0 #f40, -0.5rem 0 0 #f40",
                // backgroundColor: "transparent",
                color: "black",
                padding: "1rem",
                marginBottom: "8vh"
              }}
            >
              Datenschizzle
            </h1>
            <div className="content">
              {/* <DatenschutzBlogRoll /> */}
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
