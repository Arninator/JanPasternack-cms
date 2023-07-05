import * as React from "react";

import Layout from "../../components/Layout";
import WahlkreisBlogRoll from "../../components/WahlkreisBlogRoll";

export default class WahlkreisIndexPage extends React.Component {
  componentDidMount() {

    if (document.location.href.includes("blog")) {
      for (let i = 0; i < document.getElementsByClassName("is-4").length; i++) {
        document.getElementsByClassName("is-4")[i].classList.add("is-12");
      }
    }
  }

  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/20220504pj151.jpg')`,
            backgroundPosition: "0% 50%",
            height: "66vh"
          }}
        >
          <h1
            className="red-header"
            style={{
              // marginRight: "33%",
              // marginBottom: "5%",
            }}
          >
            Wahlkreis
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content finerInnerHTML">
            Der Landtagswahlkreis 35 (Frankfurt am Main II), für den ich bei der Landtagswahl am 8. Oktober 2023 kandidiere, besteht aus den folgenden Stadtteilen:
            Bockenheim, Hausen, Heddernheim, NiederurselFrankfurt-Niederursel, Nordweststadt, Praunheim und Rödelheim.
            
            Im Wahlkreis leben rund 104.000 Menschen; davon sind etwa 65.000 Personen, also knapp zwei Drittel, wahlberechtigt.
            </div>
            <div className="content">
              <WahlkreisBlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
