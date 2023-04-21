import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import Features from "../components/Features";
import PresseBlogRoll from "../components/PresseBlogRoll";
import AktuellesBlogRoll from "../components/AktuellesBlogRoll";
import InstaBlogRoll from "../components/InstaBlogRoll";
import TermineBlogRoll from "../components/TermineBlogRoll";

import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
import InstagramEmbed from 'react-instagram-embed';

import jancover from "../img/jan-cover.jpg";
import janUnterschrift from "../img/Unterschrift.jpg"

import "../components/style.css";

// import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
// import FullWidthImage from "../components/FullWidthImage";
import { GatsbyImage } from "gatsby-plugin-image";

// eslint-disable-next-line
export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => {
  // const heroImage = getImage(image) || image;
  const helloImage = getImage(mainpitch.image) || mainpitch.image;
  const signatureImage = getImage(mainpitch.signature) || mainpitch.signature;
  // console.log("index-blurbs: " + intro.blurbs);

  return (
    <div>
      <div
        id="cover"
        className="full-width-image-container margin-top-0 flex column flexEnd"
        style={{
          backgroundImage: 'url("../img/jan-cover.jpg")',
          // backgroundPosition: "0% 50%",
          // height: "80vh",
        }}
      >
      </div>      
      <section 
        className=""
        style={{
          width: "100vw",
          margin: "0 0 0 0"
        }}
        >
        <div
          className=""
        >
          <div
            className=""
          >
            <div className="columns">
              <div className="column is-12">
                <div 
                  className="content"
                >
                  <div
                    className="fragment tile flex row whiteBackground fade-in"
                  >
                    <div 
                      id=""
                      className="flex column"
                    >
                      <div className="tile">
                        <h1 className="title">{mainpitch.title}</h1>
                      </div>
                      <div 
                        className=""
                      >
                        <div 
                          className=""
                          style={{
                            fontWeight: "400",
                            textAlign: "justify",
                          }}
                          dangerouslySetInnerHTML={{
                            __html: mainpitch.description,
                          }}
                        ></div>
                      </div>
                      <GatsbyImage
                          image={ signatureImage }
                          alt="alt"
                          style={{
                            // maxHeight: "50vh"
                          }}
                        />
                    </div>
                  </div>
                  
                  <div 
                    className="fragment tile flex-column greyBackground fade-in"
                  >
                    <div className="tile">
                      <h3 className="has-text-weight-semibold is-size-2">
                        Aktuelles
                      </h3>
                    </div>
                    
                    <AktuellesBlogRoll />
                    <div className="column is-12 has-text-centered" style={{ marginTop: "3vh", }}>
                      <Link className="plain-button" to="/aktuelles">
                        Mehr &rarr;
                      </Link>
                    </div>
                  </div>
                  <div 
                    className="fragment tile flex-column whiteBackground fade-in"
                    style={{
                      // borderTop: "1px solid black",
                    }}
                  >
                    <div className="tile">
                      <h3 className="has-text-weight-semibold is-size-2">
                        Presse
                      </h3>
                    </div>
                    <div
                      id="presse-container"
                    >
                      <div
                        id="presse-blog-roll-container"
                        className="flex-column"
                      >
                        <PresseBlogRoll /> 
                        <div className="column is-12 has-text-centered" style={{ marginTop: "3vh", }}>
                          <Link className="plain-button" to="/presse">
                            Mehr &rarr;
                          </Link>
                        </div>
                      </div>
                      <div
                        className="twitter-div"
                      >
                        <TwitterTimelineEmbed
                        sourceType="profile"
                        screenName="jan_pasternack"
                        tweetLimit="1"
                        // options={{}}
                      />
                      </div>
                    </div>
                  </div>
                  <div 
                    className="fragment tile flex-column greyBackground fade-in"
                  >
                    <div className="tile">
                      <h3 className="has-text-weight-semibold is-size-2">
                        Nächste Termine
                      </h3>
                    </div>
                    <TermineBlogRoll />
                    <div className="column is-12 has-text-centered" style={{ marginTop: "3vh", }}>
                      <Link className="plain-button" to="/termine">
                        Alle &rarr;
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

IndexPageTemplate.propTypes = {
  // image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  // title: PropTypes.string,
  // heading: PropTypes.string,
  // subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  // description: PropTypes.string,
  // intro: PropTypes.shape({
  //   blurbs: PropTypes.array,
  // }),
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        // image={frontmatter.image}
        // title={frontmatter.title}
        // heading={frontmatter.heading}
        // subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        // description={frontmatter.description}
        // intro={frontmatter.intro}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        mainpitch {
          title
          description
          image {
            childImageSharp {
              gatsbyImageData(width: 240, quality: 64, layout: CONSTRAINED)
            }
          }
          signature {
            childImageSharp {
              gatsbyImageData(width: 240, quality: 64, layout: CONSTRAINED)
            }
          }
        }
      }
    }
  }
`;
