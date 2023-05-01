import * as React from "react";

import Layout from "../../components/Layout";
import KontaktBlogRoll from "../../components/KontaktBlogRoll";

export default class KontaktIndexPage extends React.Component {

  // componentDidMount() {
  //   if (this.document.location.href.includes("blog")) {
  //     for (let i = 0; i < this.document.getElementsByClassName("is-4").length; i++) {
  //       this.document.getElementsByClassName("is-4")[i].classList.add("is-12");
  //     }
  //   }
  // }

  render() {
    return (
      <Layout>
        <div
          id="kontakt-cover"
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/20220504pj209.jpg')`,
          }}
        >
          <h1 className="red-header">
            Kontakt
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <KontaktBlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
