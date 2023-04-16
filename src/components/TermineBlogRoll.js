import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

import "../components/style.css";

class TermineBlogRollTemplate extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      buttonOption: false,
      index: 1,
      selection: 3,
    };
  }

  componentWillMount() {
    if (typeof window !== "undefined" && window.location.href.includes("termine")) {
      this.setState({
        buttonOption: true,
      });
    }

    if (typeof window !== "undefined") {
      if ( window.innerWidth > 992) {
        this.setState({
          selection: 3,
        });
      } else if ( window.innerWidth > 700 ) {
        this.setState({
          selection: 2,
        });
      } else {
        this.setState({
          selection: 1,
        });
      }
    }
  }

  prevClick() {
    this.setState({
      index: this.state.index > 1 ? this.state.index - 1 : 1,
    })
  }

  nextClick() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark;
    this.setState({
      index: (this.state.index < (posts.length - 2)) ? this.state.index + 1 : (posts.length - 2),
    })
  }
 
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <div className="flex-row is-multiline">
        {this.state.buttonOption && 
          <div className='flex-column flex-center' style={{ height: "inherit" }}>
            <button 
              className='flex center invisible-button'
              onClick={() => this.prevClick()}
              style={{height: "10%", width: "2vw"}}
            >
              {/* &#9665; */}
              &larr;
            </button>
          </div>
        }
        {posts &&
          posts.map(({ node: post }, index) => ((index <= (this.state.index + 1)) && (index >= (this.state.index + 1 - (this.state.selection - 1)))) ? (
            <div className="is-parent column is-4" key={post.id}>
              {/* {console.log(new Date(Date.now()).toDateString())} */}
              {console.log("selection: " + this.state.selection)}
              <Link
                className=""
                to={post.fields.slug}
              >
                <article
                  className={`blog-list-item tile is-child box notification kachel ${
                    post.frontmatter.featuredpost ? 'is-featured' : ''
                  }`}
                >
                  <header className="flex-column flex-center border">
                    {post.frontmatter.featuredimage ? (
                      <div 
                        className="flex-row flex-center"
                        style={{
                          marginBottom: "1vh",
                        }}
                      >
                        <PreviewCompatibleImage
                          imageInfo={{
                            image: post.frontmatter.featuredimage,
                            alt: `featured image thumbnail for event ${post.frontmatter.title}`,
                          }}
                        />
                      </div>
                    ) : null}
                    <p 
                      className="post-meta blog-title"
                      style={{
                        width: "100%"
                      }}
                    >
                      {post.frontmatter.title}
                          <span></span>
                          <span className="subtitle is-size-5 is-block">
                            {post.frontmatter.date}
                          </span>
                      </p>
                  </header>
                  <p className="flex-column center">
                    { post.excerpt }
                    <br />
                    <br />
                    {/* <span href={post.frontmatter.location.link}>
                      {post.frontmatter.location.name}
                    </span> */}
                    <br />
                  </p>
                  <span
                    className="flex-row flex-center"
                    style={{
                      width: "100%"
                    }}
                  >
                    <Link className="button" to={post.fields.slug}>
                      Zeigen &rarr;
                    </Link>
                  </span>
                </article>
              </Link>
            </div>
          ) : "" )}
        {this.state.buttonOption && 
          <div className='flex-column flex-center' style={{height: "inherit"}}>
            <button 
              className='flex center invisible-button'
              onClick={() => this.nextClick()}
              style={{height: "10%", width: "2vw"}}
            >
              {/* &#9655; */}
              &rarr;
            </button>
          </div>
        }
      </div>
    )
  }
}

TermineBlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}


export default function TermineBlogRoll() {

  // console.log("aktuellesBlogroll")
  return (
    <StaticQuery
      query={graphql`
        query TermineBlogRollQuery {
          allMarkdownRemark(
            sort: { order: ASC, fields: [frontmatter___date] }
            filter: { frontmatter: { templateKey: { eq: "termine-page" } } }
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
                  eventlink
                  date(formatString: "MMMM DD, YYYY")
                  location {
                    name
                    link
                  }
                  featuredpost
                  featuredimage {
                    childImageSharp {
                      gatsbyImageData(
                        quality: 100
                        layout: CONSTRAINED
                      )
                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={(data, count) => <TermineBlogRollTemplate data={data} count={count}/>}
    />
  );
}
