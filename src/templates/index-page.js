import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import Features from "../components/Features";
import BlogRoll from "../components/BlogRoll";
import AktuellesBlogRoll from "../components/AktuellesBlogRoll";
import InstaBlogRoll from "../components/AktuellesBlogRoll";

import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';

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
  const heroImage = getImage(image) || image;
  const helloImage = getImage(mainpitch.image) || mainpitch.image;

  return (
    <div>
      {/* <FullWidthImage 
        img={heroImage}
        title={title}
        subheading={subheading} 
      /> */}
      <div id="cover-img">
        <img 
          src={ jancover }
          alt="Cover"
          style= {{
            position: "absolute",
            top: "0vw",
          }}
        />
      </div>
      
      <section 
        // className="section section--gradient"
        style={{
          width: "100vw",
          margin: "90vh 0 0 0"
        }}
        >
        <div 
          // className="container"
          style={{
          }}
        >
          <div 
            // style={{
            //   background: "rgb(233, 233, 233)"
            // }}
          >
            <div className="columns">
              <div className="column is-12">
                <div className="content">
                  <div 
                    className="tile flex row greyBackground fade-in section"
                    style={{
                      padding: "5% 15%",
                      position: "relative"
                    }}
                  >
                    <GatsbyImage
                      image={ helloImage }
                      alt="alt"
                      style={{
                        maxHeight: "50vh"
                      }}
                    />
                    <div 
                      id="test"
                      className="flex column"
                      style={{
                        margin: "0 5vw"
                      }}
                    >
                      <div className="tile">
                        <h1 className="title">{mainpitch.title}</h1>
                      </div>
                      <div className="tile">
                        <h3 
                          className="subtitle"
                          style={{
                            fontWeight: "400"
                          }}
                        >{mainpitch.description}</h3>
                      </div>
                      {/* <GatsbyImage
                          image={ janUnterschrift }
                          alt="alt"
                          style={{
                            // maxHeight: "50vh"
                          }}
                        /> */}
                    </div>
                  </div>
                  {/* <div className="columns">
                    <div className="column is-12">
                      <h3 className="has-text-weight-semibold is-size-2">
                        {heading}
                      </h3>
                      <p>{description}</p>
                    </div>
                  </div> */}
                  {/* <Features gridItems={intro.blurbs} />
                  <div className="columns">
                    <div className="column is-12 has-text-centered">
                      <Link className="btn" to="/products">
                        See all products
                      </Link>
                    </div>
                  </div> */}
                  
                  <div 
                    className="flex row whiteBackground fade-in section column is-12"
                    style={{
                      padding: "5% 15%",
                      position: "relative"
                    }}
                  >
                    <h3 className="has-text-weight-semibold is-size-2">
                      Aktuelles
                    </h3>
                    <AktuellesBlogRoll />
                    <div className="column is-12 has-text-centered">
                      <Link className="" to="/aktuelles">
                        Mehr... &rarr;
                      </Link>
                    </div>
                  </div>
                  <div 
                    className="flex row greyBackground fade-in section column is-12"
                    style={{
                      padding: "5% 15%",
                      position: "relative"
                    }}
                  >
                    <h3 className="has-text-weight-semibold is-size-2">
                      BLOG
                    </h3>
                    <BlogRoll />
                    <div className="column is-12 has-text-centered">
                      <Link className="btn" to="/blog">
                        Read more
                      </Link>
                    </div>
                  </div>

                  <div
                    className="flex row whiteBackground fade-in section column is-4"
                    style={{
                      margin: "0 15vw"
                    }}
                  >
                    <TwitterTimelineEmbed
                      sourceType="profile"
                      screenName="jan_pasternack"
                      tweetLimit="3"
                      // options={{}}
                    />
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
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
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
        title
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        heading 
        subheading
        mainpitch {
          title
          description
          image {
            childImageSharp {
              gatsbyImageData(width: 240, quality: 64, layout: CONSTRAINED)
            }
          }
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                gatsbyImageData(width: 240, quality: 64, layout: CONSTRAINED)
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`;
