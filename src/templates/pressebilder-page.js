import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Features from "../components/Features";
import Content, { HTMLContent } from "../components/Content";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import $ from "jquery";

// eslint-disable-next-line
export const PressebilderBlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
  image,
  intro,
}) => {
  const PostContent = contentComponent || Content;
  const presseImages = [];
  for ( let i = 0; i < intro.blurbs.length; i++) presseImages.push(getImage(intro.blurbs[i].image) || intro.blurbs[i].image);
  // for (let i = 0; i < intro.blurbs.length; i++) presseImages.ad
  console.log("Array: " + presseImages);

  return (
    <section className="section">
      {helmet || ""}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <p>{description}</p>
            {/* <Features gridItems={intro.blurbs} /> */}
            {/* <GatsbyImage 
              image= { presseImages[0] }
              alt= "{ presseImages[0] }"
              style={{
              // height: "50vh",
              border: "1px solid red"
              }}
            /> */}
            {/* {console.log("mapping: " + presseImages[0])} */}
            {presseImages.map((foto, index) => (
              <div 
                className="border"
                style={{
                  height: "auto",
                  width: "auto",
                  border: "1px solid green"
                }}
              >
                <GatsbyImage 
                  id={`image-${index}`}
                  className=""
                  image= { foto }
                  alt= { intro.blurbs[index].alt }
                  
                  style={{
                  // border: "1px solid red",
                  width: "100%",
                  height: "auto",
                  // height: "fit-content",
                  // margin: "3%",
                  }}

                  onMouseEnter={() => {
                    // $("#hover-div-" + index).css("display", "block");
                    $("#image-" + index).addClass("after")        
                    console.log();
                  }}
                  onMouseLeave={() => {
                    // $("#hover-div-" + index).css("display", "none");
                    $("#image-" + index).removeClass("after")                    
                  }}
                />
                <div
                  id={ `hover-div-${index}` }
                  className="border"
                  style={{
                    position: "absolute",
                    display: "inline-block",
                    // top: "0",
                    // left: "0%",
                    // width: "100%",
                    // height: "auto",
                    // padding: "auto",
                    // backgroundImage: { foto },
                    backgroundColor: "rgb(50,50,50,0.3)",
                    
                    // zIndex: "100",
                    display: "none",
                  }}>
                    <div
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                      }}
                    >
                      <a 
                        className="footer-item border" 
                        href=""
                        target="_blank"
                      >
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </div>
                </div>
              </div>
              
            ))}
            <PostContent content={content} />
          </div>
        </div>
      </div>
    </section>
  );
};

PressebilderBlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const PressebilderBlogPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <PressebilderBlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        intro={post.frontmatter.intro}
      />
    </Layout>
  );
};

PressebilderBlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default PressebilderBlogPost;

export const pageQuery = graphql`
  query PressebilderBlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        intro {
          heading
          description
          blurbs {
            image {
              childImageSharp {
                gatsbyImageData(quality: 100, layout: FULL_WIDTH)
              }
            }
            alt
          }
        }
      }
    }
  }
`;
