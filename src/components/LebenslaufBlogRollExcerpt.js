import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'

import remark from 'remark'
import remarkHTML from 'remark-html'

class LebenslaufBlogRollExcerptTemplate extends React.Component {

  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div
        style={{
          margin: "5% 0",
        }}
      >
        <div className='finerInnerHTML' ><p>{posts[0].node.excerpt}</p></div>
      </div>
    )
  }
}

LebenslaufBlogRollExcerpt.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default function LebenslaufBlogRollExcerpt() {
  return (
    <StaticQuery
      query={graphql`
        query LebenslaufBlogRollExcerptQuery {
          allMarkdownRemark(
            filter: { frontmatter: { templateKey: { eq: "lebenslauf-page" } } }
          ) {
            edges {
              node {
                excerpt(pruneLength: 800)
              }
            }
          }
        }
      `}
      render={(data, count) => <LebenslaufBlogRollExcerptTemplate data={data} count={count}/>}
    />
  );
}
