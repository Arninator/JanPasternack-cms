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
          <h1
            className="has-text-weight-bold is-size-1 red-header"
            style={{
              marginRight: "66%",
            }}
          >
            Lebenslauf
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <LebenslaufBlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
