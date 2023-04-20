import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import { GatsbyImage } from "gatsby-plugin-image";
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
                className={`blog-list-item tile is-child notification kachel ${
                  post.frontmatter.featuredpost ? 'is-featured' : ''
                }`}
              >
                <div style={{ fontWeight: "400" }}>{ post.frontmatter.info }<br /><br /><br /></div>
                <header className="flex-column flex-center">
                  <p 
                    className="post-meta blog-title"
                    style={{ 
                      fontWeight: "600",
                      fontSize: "2.5vh"
                    }}
                  >
                    { post.frontmatter.title }
                  </p>
                  { post.frontmatter.featuredimage ? (
                    <div style={{ margin: "0 0 2vh 0" }}>
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: post.frontmatter.featuredimage,
                          alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                        }}
                      />
                    </div>
                  ) : null}
                  <p style={{ margin: "0vh", fontWeight: "400" }}>
                    { post.frontmatter.subtitle }
                  </p>
                </header>
                <p style={{ fontWeight: "100"}} >
                  { post.excerpt }
                  <br />
                  <br />
                </p>
                <div className="flex-row flex-center">
                  <Link className="button" to={ post.fields.slug }>
                    Weiterlesen &rarr;
                  </Link>
                </div>
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
                excerpt(pruneLength: 100)
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
      render={(data, count) => <PresseBlogRollTemplate data={data} count={count} />}
    />
  );
}
