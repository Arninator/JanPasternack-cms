import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

class LebenslaufBlogRollTemplate extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark


    // Sort it, baby!
    posts[0].node.frontmatter.entries.sort(function(a, b) {
      return (
        b.startdate.substring(6) - a.startdate.substring(6)
      )
    });
    console.log(posts[0].node.frontmatter.entries);

    return (
      <div>
        <div className='' dangerouslySetInnerHTML={{ __html: posts[0].node.html }}></div>
        {posts &&
          posts[0].node.frontmatter.entries.map(( entry ) => (
            <div className="is-parent column is-12" key={entry.id}>
              <article>
                <div 
                  className='flex row space-between full-width'
                >
                  <h3
                    // className='border'
                    style= {{
                      width: "25%",
                      maxWidth: "25%",
                      margin: "10px",
                      marginTop: "2vh"
                    }}
                  >
                    {(entry.startdate) + (entry.enddate != "00.00.0000" ? " - " + entry.enddate : "")}
                  </h3>
                  <div 
                    className="flex column center"
                    style={{
                      // marginLeft: "20%"
                    }}
                  >
                    <h1>{ entry.title }</h1>
                    <div className='' dangerouslySetInnerHTML={{ __html: entry.body }}></div>
                  </div>
                </div>
              </article>
            </div>
          ))}
      </div>
    )
  }
}

LebenslaufBlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}


export default function LebenslaufBlogRoll() {

  return (
    <StaticQuery
      query={graphql`
        query LebenslaufBlogRollQuery {
          allMarkdownRemark(
            filter: { frontmatter: { templateKey: { eq: "lebenslauf-page" } } }
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
                  entries {
                    title
                    startdate
                    enddate
                    body
                  }
                }
              }
            }
          }
        }
      `}
      render={(data, count) => <LebenslaufBlogRollTemplate data={data} count={count} />}
    />
  );
}
