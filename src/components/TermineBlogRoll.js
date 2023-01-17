import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

let maxIndex = 3;

class TermineBlogRollTemplate extends React.Component {

  componentWillMount() {
    if (document.location.href.includes("termine")) {
      maxIndex = Infinity;
    }
  }
  componentDidMount() {
    if (document.location.href.includes("termine")) {
      for (let i = 0; i < document.getElementsByClassName("is-4").length; i++) {
        document.getElementsByClassName("is-4")[i].classList.add("is-6");
      }
    }
  }

  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    console.log(posts);

    return (
      <div className="columns is-multiline">
        {posts &&
          posts.map(({ node: post }, index) => index < maxIndex ? (
            <div className="is-parent column is-4" key={post.id}>
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
                  <header className="flex column center">
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
                            alt: `featured image thumbnail for post ${post.frontmatter.title}`,
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
                    {post.excerpt}
                    <br />
                    <br />
                    <div
                      className="flex row center"
                      style={{
                        width: "100%"
                      }}
                    >
                      <Link className="button" to={post.fields.slug}>
                        Show &rarr;
                      </Link>
                    </div>
                    
                  </p>
                </article>
              </Link>
            </div>
          ) : "" )}
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
                  date(formatString: "MMMM DD, YYYY")
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
