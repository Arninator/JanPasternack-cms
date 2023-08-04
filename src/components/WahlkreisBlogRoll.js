import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

class WahlkreisBlogRollTemplate extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    // console.log(posts);

    return (
      <div className="">
        {posts &&
          posts.map(({ node: post }) => (
            <div className="" key={post.id}>
              <article>

                <h1 className="is-flex is-flex-row" style={{ fontSize: "3rem", marginBottom: "2rem" }}>{ post.frontmatter.title }</h1>

                <div 
                  className="finerInnerHTML" 
                  dangerouslySetInnerHTML={{__html: post.html}}
                  style={{
                    fontWeight: "400"
                  }}
                >
                  {/* {post.excerpt} */}
                </div>
                
              </article>
              <div className="flex-row flex-center" style={{ margin: "2rem"}}>
                <Link className="plain-button" to={ post.fields.slug }>
                  Weiterlesen &rarr;
                </Link>
              </div>
            </div>
          ))}
      </div>
    )
  }
}

WahlkreisBlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}


export default function WahlkreisBlogRoll() {

  // console.log("aktuellesBlogroll")
  return (
    <StaticQuery
      query={graphql`
        query WahlkreisBlogRollQuery {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: { templateKey: { eq: "wahlkreis-page" } } }
          ) {
            edges {
              node {
                excerpt(pruneLength: 500)
                html
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
                }
              }
            }
          }
        }
      `}
      render={(data, count) => <WahlkreisBlogRollTemplate data={data} count={count} />}
    />
  );
}
