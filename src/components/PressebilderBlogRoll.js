import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import $ from "jquery";

class PressebilderBlogRollTemplate extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      columns: 12,
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
        {posts &&
          posts.map(({ node: post }) => (
            <div className="is-parent column is-12" key={post.id}>
              <article
                className={`blog-list-item tile is-child notification ${
                  post.frontmatter.featuredpost ? 'is-featured' : ''
                }`}
              >
                <header
                  style={{
                    width: "100%",
                    // border: "1px solid red"
                  }}
                >
                  <div 
                    className="flex-row space-between columns column is-12"
                    style={{
                      // width: "100%",
                      flexWrap: "wrap"
                    }}
                  >
                    {post.frontmatter.intro.blurbs.map( (foto, index) => {
                      
                      return(
                        <div
                          className={`column is-${ this.state.columns }`}
                        >
                          <div
                            id={ `container-${index}` }
                            className="flex-row flex-center"
                            style={{
                              backgroundImage: `url(${ foto.image.childImageSharp.gatsbyImageData.images.fallback.src})`,
                              width: `100%`,
                              aspectRatio: "1 / 1",
                              // height: `40vh`,
                              // maxHeight: `${foto.height * 100}vh`,
                              backgroundRepeat: "no-repeat",
                              backgroundSize: "cover",
                              margin: "3vw auto 1vh auto",
                            }}
                          >
                            <a 
                              className="flex-row flex-center" 
                              href={ foto.image.childImageSharp.gatsbyImageData.images.fallback.src }
                              download
                              style={{
                                width: "100%",
                                height: "100%",
                                textDecoration: "none"
                              }}
                            >
                              <div className="download-button flex-row flex-center" style={{ width: "100%", height: "100%"}}>
                                <i className="fa fa-download"></i>
                              </div>
                            </a>
                          </div>
                          <div className="copyright">&#169;{ post.frontmatter.intro.blurbs[index].copyright }</div>
                        </div>
                      )})
                    }
                  </div>
                </header>
              </article>
            </div>
          ))}
      </div>
    )
  }
}

PressebilderBlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}


export default function PressebilderBlogRoll() {

  // console.log("aktuellesBlogroll")
  return (
    <StaticQuery
      query={graphql`
        query PressebilderBlogRollQuery {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: { templateKey: { eq: "pressebilder-page" } } }
          ) {
            edges {
              node {
                excerpt(pruneLength: 400)
                id
                fields {
                  slug
                }
                frontmatter {
                  title
                  templateKey
                  date(formatString: "MMMM DD, YYYY")
                  featuredpost
                  featuredimage {
                    childImageSharp {
                      gatsbyImageData(
                        width: 120
                        quality: 100
                        layout: CONSTRAINED
                      )

                    }
                  }
                  intro {
                    description
                    blurbs {
                      image {
                        childImageSharp {
                          gatsbyImageData(quality: 64, layout: CONSTRAINED)
                        }
                      }
                      alt
                      copyright
                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={(data, count) => <PressebilderBlogRollTemplate data={data} count={count} />}
    />
  );
}
