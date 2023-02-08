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
      index: 1
    };
  }

  componentWillMount() {
    if (document.location.href.includes("termine")) {
      this.setState({
        buttonOption: true,
      });
    }
  }

  componentDidMount() {

  }

  prevClick() {
    this.setState({
      index: this.state.index--
    })
  }

  nextClick() {
    this.setState({
      index: this.state.index++
    })
  }
 
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div className="columns is-multiline">
        {this.state.buttonOption && 
          <div className='flex center' style={{height: "inherit"}}>
            <button 
              className='flex center invisible-button'
              onClick={() => this.prevClick}
              style={{height: "10%", width: "2vw"}}
            >
              &#9665;
            </button>
          </div>
        }
        {posts &&
          posts.map(({ node: post }, index) => index <= this.state.index + 1 && index >= this.state.index - 1 ? (
            <div className="is-parent column is-3" key={post.id}>
              {/* {console.log(new Date(Date.now()).toDateString())} */}
              {/* {console.log(post.id)} */}
              <Link
                className=""
                to={post.fields.slug}
              >
                <article
                  className={`blog-list-item tile is-child box notification hover ${
                    post.frontmatter.featuredpost ? 'is-featured' : ''
                  }`}
                  style={{
                    backgroundColor: "hsl(0, 0%, 93%)"
                  }}
                >
                  <header className="flex-column center">
                    {post.frontmatter.featuredimage ? (
                      <div 
                        className="flex row center"
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
                  <p className="flex column center">
                    { post.excerpt }
                    <br />
                    <br />
                    {/* <span href={post.frontmatter.location.link}>
                      {post.frontmatter.location.name}
                    </span> */}
                    <br />
                  </p>
                  <span
                      className="flex row center"
                      style={{
                        width: "100%"
                      }}
                    >
                      <Link className="button" to={post.fields.slug}>
                        Show &rarr;
                      </Link>
                    </span>
                </article>
              </Link>
            </div>
          ) : "" )}
        {this.state.buttonOption && 
          <div className='flex center' style={{height: "inherit"}}>
            <button 
              className='flex center invisible-button'
              onClick={() => this.nextClick}
              style={{height: "10%", width: "2vw"}}
            >
              &#9655;
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
      render={(data, count) => <TermineBlogRollTemplate data={data} count={count} />}
    />
  );
}
