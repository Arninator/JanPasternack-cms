import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

class ImpressumBlogRollTemplate extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    // console.log(posts);

    return (
      <div className="flex column center">
        {posts &&
          posts.map(({ node: post }) => (
            <div className="is-parent is-12" key={post.id}>
              <article>
                <div 
                  className=''
                >
                  <h1
                    // className='border'
                    style= {{
                      width: "25%",
                      maxWidth: "25%",
                      // margin: "10px",
                      marginTop: "2vh"
                    }}
                  >
                    { post.frontmatter.title }
                  </h1>
                  <br/>
                  <div className='' dangerouslySetInnerHTML={{ __html: post.html }}></div>
                  <br/>
                  <br/>
                  <br/>
                  <p>
                    { post.frontmatter.date }
                  </p>
                </div>
              </article>
            </div>
          ))}
      </div>
    )
  }
}

ImpressumBlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}


export default function ImpressumBlogRoll() {

  // console.log("impressumBlogroll")
  return (
    <StaticQuery
      query={graphql`
        query ImpressumBlogRollQuery {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: { templateKey: { eq: "impressum-page" } } }
          ) {
            edges {
              node {
                excerpt(pruneLength: 400)
                html
                id
                fields {
                  slug
                }
                frontmatter {
                  title
                  templateKey
                  date(formatString: "DD.MM.YYYY")
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
      render={(data, count) => <ImpressumBlogRollTemplate data={data} count={count} />}
    />
  );
}
