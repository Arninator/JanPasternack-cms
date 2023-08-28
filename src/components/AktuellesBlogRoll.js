import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import { GatsbyImage } from "gatsby-plugin-image";
import { getImage } from "gatsby-plugin-image";

import $ from "jquery";

class AktuellesBlogRollTemplate extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      columns: 4,
    };
  }

  componentWillMount() {

    if (typeof window !== "undefined") {
      if ( window.innerWidth > 992) {
        this.setState({
          columns: 4,
        });
      } else if ( window.innerWidth > 700 ) {
        this.setState({
          columns: 8,
        });
      } else {
        this.setState({
          columns: 12,
        });
      }
    }
  }

  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    // console.log(posts);

    return (
      <div className="columns is-multiline">
        {posts.length > 0 ?
          posts.map(({ node: post }, index ) => (
            typeof document !== "undefined" && document.URL.indexOf("aktuelles") > -1 ? (
              <div 
                className={`is-parent column is-${ this.state.columns }`} 
                key={post.id}
              >
                <article
                  className={`blog-list-item tile is-child notification kachel ${
                    post.frontmatter.featuredpost ? 'is-featured' : ''
                  }`}
                  style={{
                    minHeight: "45rem",
                    // aspectRatio: "1 / 1.5",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "center"
                  }}
                >
                  { post.frontmatter.info ? <div style={{ fontWeight: "400" }}>{ post.frontmatter.info }<br /><br /><br /></div> : ""}
                  <header className="flex-column flex-center">
                    <p 
                      className="post-meta blog-title"
                      style={{ 
                        fontWeight: "600",
                        fontSize: "1.5rem",
                        minHeight: "4.5rem",
                        marginBottom: "0"
                      }}
                    >
                      { post.frontmatter.title }
                    </p>
                    <p style={{ minHeight: "1.5rem", margin: "1vh auto", fontWeight: "600" }}>
                      { post.frontmatter.subtitle }
                    </p>
                    { post.frontmatter.featuredimage ? (
                      <div 
                        style={{ 
                          margin: "0 0 2vh 0", 
                          overflow: "hidden"
                        }}
                      >
                        <GatsbyImage
                          id={ `image-${post.id}` }
                          image={ getImage(post.frontmatter.featuredimage) }
                          style={{
                      
                            // backgroundSize: "cover",
                            // width: "100%",
                            // minHeight: "10rem",
                            // maxHeight: "rem",
                            // maxWidth: "75%",
                            aspectRatio: "1 / 0.8",
                            // aspectRatio: post.frontmatter.featuredimage.childImageSharp.gatsbyImageData.width > post.frontmatter.featuredimage.childImageSharp.gatsbyImageData.height ? "1 / 0.75" : "1 / 1",
                          }}
                        />
                      </div>
                    ) : null}
                  </header>
                  <p className="" style={{ height: "200%", fontWeight: "100"}} >
                    { post.excerpt }
                  </p>
                  <div className="">
                    <Link className="button" to={ post.fields.slug }>
                      Weiterlesen &rarr;
                    </Link>
                  </div>
                </article>
              </div>
            ) : index < ( 12 / this.state.columns ) ?
            <div 
              className={`is-parent column is-${ this.state.columns }`} 
              key={post.id}
            >
              <article
                className={`blog-list-item tile is-child notification kachel ${
                  post.frontmatter.featuredpost ? 'is-featured' : ''
                }`}
                style={{
                  minHeight: "45rem",
                  // aspectRatio: "1 / 1.5",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "center"
                }}
              >
                { post.frontmatter.info ? <div style={{ fontWeight: "400" }}>{ post.frontmatter.info }<br /><br /><br /></div> : ""}
                <header className="flex-column flex-center">
                  <p 
                    className="post-meta blog-title"
                    style={{ 
                      fontWeight: "600",
                      fontSize: "1.5rem",
                      minHeight: "4.5rem",
                      marginBottom: "0"
                    }}
                  >
                    { post.frontmatter.title }
                  </p>
                  <p style={{ minHeight: "1.5rem", margin: "1vh auto", fontWeight: "600" }}>
                    { post.frontmatter.subtitle }
                  </p>
                  { post.frontmatter.featuredimage ? (
                    <div 
                      style={{ 
                        margin: "0 0 2vh 0", 
                        overflow: "hidden"
                      }}
                    >
                      <GatsbyImage
                        id={ `image-${post.id}` }
                        image={ getImage(post.frontmatter.featuredimage) }
                        style={{
                    
                          // backgroundSize: "cover",
                          // width: "100%",
                          // minHeight: "10rem",
                          // maxHeight: "rem",
                          // maxWidth: "75%",
                          aspectRatio: "1 / 0.8",
                          // aspectRatio: post.frontmatter.featuredimage.childImageSharp.gatsbyImageData.width > post.frontmatter.featuredimage.childImageSharp.gatsbyImageData.height ? "1 / 0.75" : "1 / 1",
                        }}
                      />
                    </div>
                  ) : null}
                </header>
                <p className="" style={{ height: "200%", fontWeight: "100"}} >
                  { post.excerpt }
                </p>
                <div className="">
                  <Link className="button" to={ post.fields.slug }>
                    Weiterlesen &rarr;
                  </Link>
                </div>
              </article>
            </div> : ""
          )) : 
          <div 
            className="is-parent column is-4"
            style={{
              margin: "1vw",
              color: "darkolivegreen"
            }}
          >
            Aktuell gibt es leider keine Neuigkeiten...
          </div>}
      </div>
    )
  }
}

AktuellesBlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}


export default function AktuellesBlogRoll() {

  // console.log("aktuellesBlogroll")
  return (
    <StaticQuery
      query={graphql`
        query AktuellesBlogRollQuery {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: { templateKey: { eq: "aktuelles-page" } } }
          ) {
            edges {
              node {
                excerpt(pruneLength: 250)
                id
                fields {
                  slug
                }
                frontmatter {
                  info
                  title
                  subtitle
                  date
                  featuredimage {
                    childImageSharp {
                      gatsbyImageData(
                        layout: CONSTRAINED
                      )
                    }
                  }
                  link
                }
              }
            }
          }
        }
      `}
      render={(data, count) => <AktuellesBlogRollTemplate data={data} count={count} />}
    />
  );
}
