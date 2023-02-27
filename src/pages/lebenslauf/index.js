import * as React from "react";

import Layout from "../../components/Layout";
import LebenslaufBlogRoll from "../../components/LebenslaufBlogRoll";

export default class LebenslaufIndexPage extends React.Component {

  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/20220504pj201.jpg')`,
            backgroundPosition: "0% 15%",
            padding: "0vh 15vw"
          }}
        >
          <div 
            className="full-width"
            style={{
            }}
          >
          </div>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <h1
                className="has-text-weight-bold is-size-1"
                style={{
                  // boxShadow: "0.5rem 0 0 #f40, -0.5rem 0 0 #f40",
                  // backgroundColor: "#f40",
                  // color: "black",
                  // padding: "1rem",
                }}
              >
                Lebenslauf
              </h1>
              <LebenslaufBlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
