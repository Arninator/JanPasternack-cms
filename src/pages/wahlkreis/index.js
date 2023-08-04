import * as React from "react";
import * as d3 from "d3";
import * as topojson from "topojson-client";

import Layout from "../../components/Layout";
import WahlkreisBlogRoll from "../../components/WahlkreisBlogRoll";
import WahlkreisCover from "../../components/WahlkreisCover";

export default class WahlkreisIndexPage extends React.Component {
  
  componentDidMount() {


  const plot = (edData, coData) => {
    // console.log(edData, coData)

    //create the titles
    const title = d3.select("#info")
      .append("h1")
      .text("United States Educational Attainment")
      .attr("id", "title")

    const description = d3.select("#info")
      .append("h2")
      .text("Percentage of adults age 25 and older with a bachelor's degree or higher (2010-2014)") //change the static date 
      .attr("id", "description")

    //set up the canvas 
    const HEIGHT = 600
    const WIDTH = 960
    const PADDING = 60

    const canvas = d3.select("#chart")
      .append("svg")
      .attr("class", "canvas")
      .attr("height", HEIGHT)
      .attr("width", WIDTH)

      
      //countie color
      // console.log(edData)
      // const range = d3.extent(edData.map((county) => county.bachelorsOrHigher))

      let range = [0, 100]
      
      const myColor = d3.scaleSequential()
      .interpolator(d3.interpolateRdYlGn)
      .domain(range)
      
      const getCounty = (coDataItem) => {
        let id = coDataItem["id"]
        let county = edData.find((item) => item["fips"] === id)
        return county
        // let percentage = county["bachelorsOrHigher"]
      }

    //create the tooltip for more information
    let Tooltip = d3.select("#chart")
    .append("div")
    .attr("id", "tooltip")
    .attr("class", "tooltip")
    .style("opacity", 0)

    var mouseover = (event, data) => {
      let county = getCounty(data)
      // console.log(county)
      Tooltip.html(`<strong>${county.state}</strong><br>
        ${county.area_name}: ${county.bachelorsOrHigher}`)
        .attr("data-education", county.bachelorsOrHigher)
        .style("opacity", 0.9)
        .style('left', event.pageX + 10 + 'px')
        .style('top', event.pageY - 28 + 'px')
    }

    var mouseout = (event, d) => {
      Tooltip.style('opacity', 0)
    }


    //draw counties 
    const counties = topojson.feature(coData, coData.objects.counties).features
    canvas.selectAll("path")
      .data(counties)
      .enter()
      .append("path")
      .attr("d", d3.geoPath())
      .attr("class", "county")
      .attr("fill", (coDataItem) => myColor(getCounty(coDataItem)["bachelorsOrHigher"]))
      .attr("data-fips", (coDataItem) => coDataItem.id)
      .attr("data-education", (coDataItem) => getCounty(coDataItem)["bachelorsOrHigher"])
      .on("mouseover", mouseover)
      .on('mouseout', mouseout)



    //-----------------------------------------------------------------------------------------------------------------------------------



    //create the legend box
    const LEG_HEIGTH = HEIGHT/6
    const LEG_PADDING = 25
    
    const legend = d3.select("#chart")
    .append("svg")
    .attr("class", "canvas legend")
    .attr("id", "legend")
    .attr("height", LEG_HEIGTH)
    .attr("width", WIDTH)
    
    //create the scale with the variance 
    const edScale = d3.scaleLinear()
      .domain(range)
      .range([PADDING, WIDTH - PADDING])
    
    let TK = 11 //numberOfDivisions
    const totalVariance = range[1] - range[0]
    const boxWidth = (edScale(range[1]) - edScale(range[0])) / (TK-1)
    let arr = []
    for (let i = range[0]; i < range[1]; i += (range[1] - range[0]) / (TK-1)) {
        arr.push(i)
      }

    legend.append("g")
      .call(d3.axisBottom(edScale).ticks(TK))
      .attr("id", "x-axisLegend-label")
      .attr("transform", `translate(0, ${LEG_HEIGTH - LEG_PADDING})`)
      .append("text")
      .attr("class", "x-axis-label")
      .attr("x", WIDTH - PADDING/2)
      .attr("y", LEG_PADDING/3)
      .attr("fill", "black")
      .text("%")

    // create the boxes for the legend
    legend.selectAll(".box")
    .data(arr)
    .enter()
    .append("rect")
    .attr("height", (varData) => LEG_HEIGTH - 2 * LEG_PADDING)
    .attr("width", (varData) => boxWidth)
    .attr("class", "box")
    .attr("y", (varData) => LEG_HEIGTH - 3 * LEG_PADDING)
    .attr("x", (varData) => edScale(varData))
    .attr("variance", (varData) => varData)
    .style("fill", (varData) => myColor(varData))

  }

  Promise.all([
    d3.json(
      "https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/for_user_education.json"
      // "https://offenedaten.frankfurt.de/dataset/49720b5f-0af0-4eeb-895f-83a255f17b02/resource/3fe791c0-5c90-4808-88f2-5f1d0b067c40/download/bevoelkerung.json"
      ),
    d3.json(
      "https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/counties.json"
      // "https://offenedaten.frankfurt.de/dataset/49720b5f-0af0-4eeb-895f-83a255f17b02/resource/3fe791c0-5c90-4808-88f2-5f1d0b067c40/download/bevoelkerung.json"
      )
  ])
    .then(([edData, coData]) => plot(edData, coData))
    .catch((error) => console.log(error))
  }

  render() {
    return (
      <Layout>
        {/* <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('img/IMG_20201102_184803.jpg')`,
            backgroundPosition: "0% 50%",
            // height: "66vh"
          }}
        >
          <h1
            className="red-header"
            style={{
              // marginRight: "33%",
              // marginBottom: "5%",
            }}
          >
            Wahlkreis
          </h1>
        </div> */}
        <WahlkreisCover />
        <section className="section">
          <div className="container">
            <div className="content finerInnerHTML">
              <p>
                Der Landtagswahlkreis 35 (Frankfurt am Main II), für den ich bei der Landtagswahl am 8. Oktober 2023 kandidiere, besteht aus den folgenden Stadtteilen:
                Bockenheim, Hausen, Heddernheim, NiederurselFrankfurt-Niederursel, Nordweststadt, Praunheim und Rödelheim.
            
                Im Wahlkreis leben rund 104.000 Menschen; davon sind etwa 65.000 Personen, also knapp zwei Drittel, wahlberechtigt.
              </p>
            </div>
            <div className="content">
              {/* <svg id="my_dataviz" width="800" height="450"></svg> */}
              <WahlkreisBlogRoll />
            </div>
            <div id="info"></div>
            <div id="chart"></div>
          </div>
        </section>
      </Layout>
    );
  }
}
