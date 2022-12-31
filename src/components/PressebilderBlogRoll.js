import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

class PressebilderBlogRollTemplate extends React.Component {
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
                className={`blog-list-item tile is-child box notification ${
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
                    className="flex row space-between"
                    style={{
                      width: "100%",
                      flexWrap: "wrap"
                    }}
                  >
                    {post.frontmatter.intro.blurbs.map( fotoObject => {
                    return(
                      <div
                        style={{
                          width: fotoObject.height < fotoObject.width ? "20%": "20%",
                          margin: "2vh",
                        }}
                      >
                        <PreviewCompatibleImage
                          imageInfo={{
                            image: fotoObject.image,
                            alt: fotoObject.alt,
                            // width: fotoObject.image.width,
                            // height: fotoObject.height,
                          }}
                        />
                      </div>
                      )})
                    }
                  </div>
                  {/* {post.frontmatter.image ? (
                    <div className="featured-thumbnail">
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: post.frontmatter.image,
                          alt: `featured image thumbnail for post ${post.frontmatter.alt}`,
                          width:
                            post.frontmatter.image.childImageSharp
                              .gatsbyImageData.width,
                          height:
                            post.frontmatter.image.childImageSharp
                              .gatsbyImageData.height,
                        }}
                      />
                    </div>
                  ) : null} */}
                  {/* <p className="post-meta">
                    <Link
                      className="title has-text-primary is-size-4"
                      to={post.fields.slug}
                    >
                      {post.frontmatter.title}
                    </Link>
                    <span> &bull; </span>
                    <span className="subtitle is-size-5 is-block">
                      {post.frontmatter.date}
                    </span>
                  </p> */}
                </header>
                <p style={{ width: "100%" }}>
                  {post.excerpt}
                  <br />
                  <br />
                  <Link 
                    className="button column is-4" 
                    to={post.fields.slug}
                    style={{
                      margin: "auto"
                    }}
                  >
                    See More &rarr;
                  </Link>
                </p>
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
                    heading
                    description
                    blurbs {
                      image {
                        childImageSharp {
                          gatsbyImageData(quality: 64, layout: CONSTRAINED)
                        }
                      }
                      alt
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
