import * as React from "react";

import Layout from "../../components/Layout";
import ImpressumBlogRoll from "../../components/ImpressumBlogRoll";

export default class ImpressumBlogIndexPage extends React.Component {
  render() {
;
    return (
      <Layout>
        {/* <div
          className="full-width-image-container margin-top-0"
          style={{
            // backgroundImage: `url('/img/aktuelles-cover.jpg')`,
            backgroundPosition: "0% 33%"
          }}
        >
        </div> */}
        <section className="section">
          <div className="container">
            <div className="content">
              <ImpressumBlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
