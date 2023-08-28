import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import AktuellesBlogRoll from "../components/AktuellesBlogRoll";
import TermineBlogRoll from "../components/TermineBlogRoll";

// import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';

// import jancover from "../img/jan-cover.jpg";
// import janUnterschrift from "../img/Unterschrift.jpg"

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

  const coverImage = getImage(image) || image;
  const helloImage = getImage(mainpitch.image) || mainpitch.image;
  const signatureImage = getImage(mainpitch.signature) || mainpitch.signature;

  return (
    <div className="">
      {/* <div
        id="cover"
        className="full-width-image-container margin-top-0"
      > */}
        {/* <FullWidthImage img={ coverImage } style={{ height: "75vh", top: "-5vh" }}/> */}
      {/* </div> */}
      
      <div
        id="cover"
        className="full-width-image-container margin-top-0 flex-column flexEnd"
        style={{
          backgroundImage: "url(" + coverImage.images.fallback.src + ")",
        }}
      >
      </div>      
      <section 
        className=""
        >
            <div className="">
              <div className="column is-12" style={{ padding: "0"}}>
                <div 
                  className="content"
                >
                  <div
                    className="fragment tile flex-row whiteBackground fade-in"
                  >
                    <div
                      className="flex-row flex-center"
                      style={{
                        alignSelf: "flex-start",
                        margin: "0 2vw",
                      }}
                    >
                      <GatsbyImage
                        image={ helloImage }
                        alt="alt"
                        style={{
                          alignSelf: "flex-start",
                        }}
                      />
                    </div>
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
                    <p 
                      className="" 
                      style={{
                        fontSize: "2rem"
                    }}>
                      Wenn Sie meine Kampagne unterstützen wollen, können Sie das <a href="https://www.paypal.com/donate/?hosted_button_id=6CDAER4X3ZXAQ" target="_blank" style={{textDecoration: "underline"}}>hier &rarr;</a> mit einer Spende tun. Für Ihren Beitrag Danke ich Ihnen recht herzlich!
                    </p>
                  </div>
                  <div 
                    className="fragment tile flex-column whiteBackground fade-in"
                  >
                    <div className="tile flex-row flex-center">
                      <h3 className="has-text-weight-semibold is-size-1">
                        <span>Aktuelles & Presse</span>
                        <br />
                        <br />
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
                    className="fragment tile flex-column centerCenter greyBackground fade-in"
                  >
                    <div className="">
                      <div className="tile flex-column flex-center">
                        <h3 className="has-text-weight-semibold is-size-1">Podcast</h3>
                        <h4 className="" style={{ fontWeight: "400", fontSize: "28px"}}>
                          <span>Die aktuelle Folge des Podcastes <a href="https://open.spotify.com/show/4MNRVmUE0Sx552xTez27Fn?si=1cdc6a33cf1c4f64" target="_blank">Gude&nbsp;Zukunft!</a> von Hendrik Simon und mir:</span>
                          <br />
                        </h4>
                      </div>
                      <div style={{ marginBottom: "3rem"}}>
                        <iframe src="https://open.spotify.com/embed/show/4MNRVmUE0Sx552xTez27Fn?utm_source=generator" style={{ width:"100%", height:"352px", frameBorder:"0", allowfullscreen:"", allow:"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture", border:"none"}} loading="lazy"></iframe>                    
                      </div>
                    </div>
                    <div className="full-width flex-row flex-center">
                      <Link className="plain-button" to={ "/podcast" }>
                        Mehr erfahren &rarr;
                      </Link>
                    </div>
                    {/* <div
                      className="twitter-div column"
                    >
                      <div className="tile flex-row flex-center">
                        <h3 className="has-text-weight-semibold is-size-1" style={{ fontWeight: "400", fontSize: "28px"}}>
                          <span>Jan auf Twitter: </span>
                          <br />
                          <br />
                        </h3>
                      </div>
                      <TwitterTimelineEmbed
                        sourceType="profile"
                        screenName="jan_pasternack"
                        tweetLimit="1"
                        // options={{}}
                      />
                    </div> */}
                  </div>
                  
                  {/* <div 
                    className="fragment tile flex-column greyBackground fade-in"
                    style={{
                      // borderTop: "1px solid black",
                    }}
                  >
                    <div className="tile flex-row flex-center">
                      <h3 className="has-text-weight-semibold is-size-1">
                        <span>Presse</span>
                        <br />
                        <br />
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
                  </div> */}
                  
                  <div 
                    className="fragment tile flex-column whiteBackground fade-in"
                  >
                    <div className="tile flex-row flex-center">
                      <h3 className="has-text-weight-semibold is-size-1">
                        <span>Nächste Termine</span>
                        <br />
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
      </section>
    </div>
  );
};

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  // image: PropTypes.object,
  title: PropTypes.string,
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
        image={frontmatter.image}
        title={frontmatter.title}
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
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
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
