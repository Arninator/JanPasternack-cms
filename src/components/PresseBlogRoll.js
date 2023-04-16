import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import $ from "jquery";

class PresseBlogRollTemplate extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      columns: 12,
    };
  }

  componentWillMount() {

    if (typeof window !== "undefined" && (window.location.href.includes("presse") || window.location.href.includes("news"))) {
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

    return (
      <div className="columns is-multiline">
        {posts.length > 0 ?
          posts.map(({ node: post }) => (
            <div 
              className={`is-parent column is-${ this.state.columns }`} 
              key={post.id}
            >
              <article
                className={`blog-list-item tile is-child box notification kachel ${
                  post.frontmatter.featuredpost ? 'is-featured' : ''
                }`}
              >
                <header className="flex-column flex-center">
                  { console.log("featIMG: " + post.frontmatter.featuredimage) }
                  {post.frontmatter.featuredimage ? (
                    <div style={{ width: "100%" }}>
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: post.frontmatter.featuredimage,
                          alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                          width: "200vw"
                          //   post.frontmatter.featuredimage.childImageSharp
                          //     .gatsbyImageData.width,
                          // height:
                          //   post.frontmatter.featuredimage.childImageSharp
                          //     .gatsbyImageData.height,
                        }}
                      />
                    </div>
                  ) : null}
                  <p className="post-meta blog-title">
                    {/* <Link
                      className="title has-text-primary is-size-4"
                      to={post.fields.slug}
                    > */}
                      {post.frontmatter.title}
                    {/* </Link> */}
                    <span> &bull; </span>
                    <span className="subtitle is-size-5 is-block">
                      {/* {post.frontmatter.date} */}
                    </span>
                  </p>
                </header>
                <p>
                  {post.excerpt}
                  <br />
                  <br />
                  <Link className="button" to={post.fields.slug}>
                    Weiterlesen &rarr;
                  </Link>
                </p>
              </article>
            </div>
          )) : 
          <div 
            className="is-parent column is-12"
            style={{
              margin: "1vw",
              color: "darkolivegreen"
            }}
          >
            Derzeit gibt es keine aktuellen Pressemitteilungen...
          </div>}
      </div>
    )
  }
}

PresseBlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}


export default function PresseBlogRoll() {

  // console.log("aktuellesBlogroll")
  return (
    <StaticQuery
      query={graphql`
        query PresseBlogRollQuery {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: { templateKey: { eq: "presse-page" } } }
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
                  subtitle
                  featuredimage {
                    childImageSharp {
                      gatsbyImageData(
                        width: 120
                        quality: 100
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
      render={(data, count) => <PresseBlogRollTemplate data={data} count={count} />}
    />
  );
}
