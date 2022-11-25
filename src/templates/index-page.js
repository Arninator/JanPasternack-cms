import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import Features from "../components/Features";
import BlogRoll from "../components/BlogRoll";
import FullWidthImage from "../components/FullWidthImage";
import janCover from "../img/janCover.jpg";

componentDidMount () {

  // apiCalendar.handleAuthClick();
  fetch("https://www.googleapis.com/calendar/v3/calendars/ar.maxnold@gmail.com/events?key=AIzaSyB7GfNxM4TXXtDue-64TMEzOViC8dTIgmA")
  // fetch("https://www.googleapis.com/calendar/v3/calendars/sechzehngeteiltdurchneun@gmail.com/events?key=AIzaSyD3HySl2mo7m_5cjUwhltGmDt29yJ4U5uU")
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          termine: result.items
        });
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )


  $(document).ready(function() {
    $(window).scroll(function() {

        /* sticky menu */
        $("#menu-div").each(function() {
            var menu_top = $(this).offset().top;
            var window_top = $(window).scrollTop();

            if (window_top > ($(window).height()) / 90.) {
                $(this).css("background-color", "rgb(227, 0, 15)");
                $("ul").addClass("menu-row");
                $("ul").removeClass("menu-column");
                $(".spd-logo").css("height", "3vh");
            } else {
                $(this).css("background-color", "transparent");
                $("ul").addClass("menu-column");
                $("ul").removeClass("menu-row");
                $(".spd-logo").css("height", "5vh");
            }
        })

        /* position of fade in and out objects */
        $('.fade-in').each(function(index){

            var object_top = $(this).offset().top;
            var object_bottom = $(this).offset().top + $(this).outerHeight();
            var window_top = $(window).scrollTop();
            var window_bottom = $(window).scrollTop() + $(window).height();

            /* if its half seen, fade it in */
            if (window_bottom - object_top > ($(this).outerHeight() / 2.)){
                $(this).css("opacity", "1");
            } else {
                $(this).css("opacity", "0");
            }
        });

    });

    // $(".spd-logo").hover(function() {
    //     $(".spd-logo").attr("src", logoBlack);
    // }, function() {
    //     $(".spd-logo").attr("src", logoWhite);
    // });
  });
}

// eslint-disable-next-line
export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => {
  const heroImage = getImage(image) || image;

  return (
    <div>
      {/* <FullWidthImage 
        img={heroImage}
        title={title}
        subheading={subheading} 
      /> */}
      <img 
        src={ janCover }
        style= {{
          position: "absolute",
          top: "0px"
        }}
      />
      <section 
        className="section section--gradient"
        style={{
          marginTop: "100vh"
        }}
        >
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="content">
                  <div className="content">
                    <div className="tile">
                      <h1 className="title">{mainpitch.title}</h1>
                    </div>
                    <div className="tile">
                      <h3 className="subtitle">{mainpitch.description}</h3>
                    </div>
                  </div>
                  <div className="columns">
                    <div className="column is-12">
                      <h3 className="has-text-weight-semibold is-size-2">
                        {heading}
                      </h3>
                      <p>{description}</p>
                    </div>
                  </div>
                  <Features gridItems={intro.blurbs} />
                  <div className="columns">
                    <div className="column is-12 has-text-centered">
                      <Link className="btn" to="/products">
                        See all products
                      </Link>
                    </div>
                  </div>
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2">
                      Latest stories
                    </h3>
                    <BlogRoll />
                    <div className="column is-12 has-text-centered">
                      <Link className="btn" to="/blog">
                        Read more
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                gatsbyImageData(width: 240, quality: 64, layout: CONSTRAINED)
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`;
