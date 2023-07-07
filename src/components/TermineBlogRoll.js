import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import { GatsbyImage } from "gatsby-plugin-image";
import { getImage } from "gatsby-plugin-image";
import $ from "jquery";

class TermineBlogRollTemplate extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      columns: 12,
      frequency: 4,
      currentIndex: 0,
    };
  }

  componentWillMount() {

    if (typeof window !== "undefined" && window.location.href.includes("news")) {
      if ( window.innerWidth > 992) {
        this.setState({
          columns: 4,
          frequency: 3,
        });
      } else if ( window.innerWidth > 700 ) {
        this.setState({
          columns: 8,
          frequency: 2,
        });
      } else {
        this.setState({
          columns: 12,
          frequency: 1,
        });
      }
    } else if (typeof window !== "undefined" && window.location.href.includes("termine")) {
      if ( window.innerWidth > 992) {
        this.setState({
          columns: 4,
          frequency: 99,
        });
      } else if ( window.innerWidth > 700 ) {
        this.setState({
          columns: 8,
          frequency: 99,
        });
      } else {
        this.setState({
          columns: 12,
          frequency: 99,
        });
      }
    } else if (typeof window !== "undefined") {
      if ( window.innerWidth > 992) {
        this.setState({
          columns: 4,
          frequency: 3,
        });
      } else if ( window.innerWidth > 700 ) {
        this.setState({
          columns: 8,
          frequency: 2,
        });
      } else {
        this.setState({
          columns: 12,
          frequency: 1,
        });
      }
    }
  }

  prev() {
    this.setState({
      currentIndex: this.state.currentIndex > 0 ? this.state.currentIndex - 1 : 0,
    })
    // console.log(this.state);
  }
  next( max ) {
    this.setState({
      currentIndex: this.state.currentIndex < max - this.state.frequency ? this.state.currentIndex + 1 : max - this.state.frequency,
    })
    // console.log(this.state);
  }

  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    var dateString = yyyy + "." + mm + "." + dd

    const postList = posts.length > 0 ? posts.filter(({ node: post }) => ( post.frontmatter.date >= dateString )) : "" ;

    return (
      <div 
        className={`columns full-width ${ typeof window !== "undefined" && window.location.href.includes("termine") && window.innerWidth < 700 ? "is-multiline flex-column" : "flex-row space-between" }`} 
        style={{
          margin: "0% 2%",
          minHeight: "33vh"
        }}
      >
        {this.state.frequency < 4 ? (
          <button
            className="invisible-button"
            style={{
              fontSize: "3vh",
              fontWeight: "600",
              height: "100%",
              color: `${ this.state.currentIndex == 0 ? "lightgrey" : "black"}`,
              alignSelf: "center",
            }}
            onClick={ () => this.prev() }
          >
            &lt;
          </button>
        ) : ""}
        <div 
          className={`full-width ${ typeof window !== "undefined" && window.location.href.includes("termine") && window.innerWidth < 700 ? "flex-column" : "flex-row" } startStart`} 
          style={{ flexWrap: "wrap" }}
        >
        {postList.length > 0 ?
          postList.map(({ node: post }, index) => (
            index < ( this.state.currentIndex + this.state.frequency ) && index >= ( this.state.currentIndex ) ? (
            <div 
              className={`is-parent column is-${ this.state.columns }`} 
              key={post.id}
              style={{
                // alignSelf: "flex-start"
              }}
            >
              {/* {console.log("currIndex: " + this.state.currentIndex + " filterlength: " + posts.length)}
              { console.log("ID: " + index) } */}
              <article
                  className={`blog-list-item tile is-child notification kachel ${
                    post.frontmatter.featuredpost ? 'is-featured' : ''
                  }`}
                >
                  <header className="flex-column flex-center">
                    {post.frontmatter.featuredimage ? (
                      <div 
                        className="flex-column flex-center"
                        style={{
                          marginBottom: "1vh",
                        }}
                      >
                        <p className="subtitle is-size-5 is-block" style={{ alignSelf: "flex-start"}}>
                          { (post.frontmatter.date.substring(8) + "." + post.frontmatter.date.substring(5,7) + "." + post.frontmatter.date.substring(0,4)) }
                        </p>
                        <GatsbyImage
                          image={ getImage(post.frontmatter.featuredimage) }
                          style={{
                            aspectRatio: "1 / 0.5"
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
                    </p>
                  </header>
                  <p className="flex-column" style={{ fontWeight: "400" }}>
                    { post.excerpt }
                    <br />
                    <br />
                    <br />
                  </p>
                  <span
                    className="flex-row flex-center"
                    style={{
                      width: "100%"
                    }}
                  >
                    <Link className="button" to={post.fields.slug}>
                      Zeigen &rarr;
                    </Link>
                  </span>
                </article>
            </div>
          ): (""))) : 
          <div 
            className="is-parent column is-12 flex-row flex-center "
            style={{
              margin: "1vw",
              color: "darkolivegreen",
              alignSelf: "center"
            }}
          >
            <p className="column is-4" style={{ margin: "auto", fontSize: "1.5rem", fontWeight: "400"}}>Aktuell stehen keine Termine an...</p>
          </div>}
        </div>
        {this.state.frequency < 4 ? (
        <button
          className="invisible-button"
          style={{
            fontSize: "3vh",
            fontWeight: "600",
            color: `${ this.state.currentIndex == postList.length - this.state.frequency ? "lightgrey" : "black"}`,
           }}
          onClick={ () => this.next( postList.length ) }
        >
          &gt;
        </button>) : ""}
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
                excerpt(pruneLength: 100)
                id
                fields {
                  slug
                }
                frontmatter {
                  title
                  date (formatString: "YYYY.MM.DD")
                  featuredimage {
                    childImageSharp {
                      gatsbyImageData(
                        layout: CONSTRAINED
                      )
                    }
                  }
                  location{
                    name
                    link
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
