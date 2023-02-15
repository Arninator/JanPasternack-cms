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
              <p>
                Geboren wurde ich am 24. April 1987 in Neubrandenburg und aufgewachsen bin ich in der Hansestadt Rostock. Politisiert im Kampf gegen Rechtsextremismus bin ich 2004 den Jusos und schließlich der SPD beigetreten. Nach meinem Studium der Politikwissenschaften an der Goethe Universität in Frankfurt am Main folgten längere Auslandsaufenthalte in Russland, u. a. als Sprachassistent des Goethe Instituts in Jekaterinburg. Anschließend war ich beruflich stets an der Schnittstelle zwischen Politik und Verwaltung tätig, u. a. als Wissenschaftlicher Mitarbeiter im Hessischen Landtag und als Grundsatzreferent im Dezernat für Integration und Bildung der Stadt Frankfurt am Main. Derzeit leite ich den Fachbereich Sozialer Zusammenhalt an der Volkshochschule Frankfurt. Ich bin Mitglied im Landesvorstand der SPD Hessen sowie im Unterbezirksvorstand der SPD Frankfurt. Privat bin ich verheiratet und habe eine Tochter. Sofern ich neben all diesen Verpflichtungen noch etwas Zeit für meine Hobbys finde, gehe ich am liebsten eine Runde joggen im Niddapark.
              </p>
              <LebenslaufBlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
