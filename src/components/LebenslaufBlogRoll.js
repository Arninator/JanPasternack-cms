import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'

import remark from 'remark'
import remarkHTML from 'remark-html'

class LebenslaufBlogRollTemplate extends React.Component {

  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark


    // Sort it, baby!
    posts[0].node.frontmatter.entries.sort(function(a, b) {
      return (
        (b.startdate.substring(6) + b.startdate.substring(3,5) + b.startdate.substring(0,2)) - (a.startdate.substring(6) + a.startdate.substring(3,5) + a.startdate.substring(0,2))
      )
    });
    // console.log(data);

    return (
      <div>
        <div className='' dangerouslySetInnerHTML={{ __html: posts[0].node.html }} style={{fontWeight: "100"}}></div>
        {posts &&
          posts[0].node.frontmatter.entries.map(( entry ) => (
            <div className="is-parent column is-12" key={entry.id}>
              <article>
                <div 
                  className='flex row space-between full-width'
                >
                  <h2
                    // className='border'
                    style= {{
                      width: "25%",
                      maxWidth: "25%",
                      margin: "10px",
                      marginTop: "2vh"
                    }}
                  >
                    {(entry.startdate) + (entry.enddate != "00.00.0000" ? " - " + entry.enddate : "")}
                  </h2>
                  <div 
                    className="flex column center"
                    style={{
                      // marginLeft: "20%"
                    }}
                  >
                    <h1>{ entry.title }</h1>
                    <div className='' dangerouslySetInnerHTML={{ __html: toHTML(entry.body) }} style={{fontWeight: "400"}}></div>
                  </div>
                </div>
              </article>
            </div>
          ))}
      </div>
    )
  }
}

const toHTML = value => remark()
                            .use(remarkHTML)
                            .processSync(value)
                            .toString()

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
      render={(data, count) => <LebenslaufBlogRollTemplate data={data} count={count}/>}
    />
  );
}
