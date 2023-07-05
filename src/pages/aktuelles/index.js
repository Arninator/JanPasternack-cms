import * as React from "react";

import Layout from "../../components/Layout";
import AktuellesBlogRoll from "../../components/AktuellesBlogRoll";

export default class AktuellesBlogIndexPage extends React.Component {
  render() {
;
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/aktuelles-cover.jpg')`,
            backgroundPosition: "0% 33%"
          }}
        >
          <h1 
            className="red-header"
            style={{
              marginTop: "10%"
            }}
          >
            Presse & Aktuelles
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <h2
              className="has-text-weight-bold is-size-4 flex"
              style={{
                // boxShadow: "0.5rem 0 0 #f40, -0.5rem 0 0 #f40",
                // backgroundColor: "transparent",
                color: "black",
                padding: "1rem",
                marginBottom: "8vh"
              }}
            >
              Informationen über aktuelle Geschehnisse und Termine in Frankfurt
            </h2>
            <div className="content">
              <AktuellesBlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
