import * as React from "react";

import Layout from "../../components/Layout";
import TermineBlogRoll from "../../components/TermineBlogRoll";

export default class TermineIndexPage extends React.Component {
  // componentDidMount() {

  //   if (document.location.href.includes("termine")) {
  //     for (let i = 0; i < document.getElementsByClassName("is-4").length; i++) {
  //       document.getElementsByClassName("is-4")[i].classList.add("is-6");
  //     }
  //   }
  // }

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
            className="has-text-weight-bold is-size-1"
            style={{
              // boxShadow: "0.5rem 0 0 #f40, -0.5rem 0 0 #f40",
              // backgroundColor: "#f40",
              color: "white",
              padding: "1rem",
            }}
          >
            Termine
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <TermineBlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
