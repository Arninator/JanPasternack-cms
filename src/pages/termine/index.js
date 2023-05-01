import * as React from "react";

import Layout from "../../components/Layout";
import TermineBlogRoll from "../../components/TermineBlogRoll";

export default class TermineIndexPage extends React.Component {

  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/IMG-20220507-WA0007.jpg')`,
            backgroundPosition: "0% 20%"
          }}
        >
          <h1
            className="red-header"
            style={{
              marginRight: "50%",
            }}
          >
            Termine
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              
              {/* <h3>Dies sind alle kommenden Termine</h3> */}
              <TermineBlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
