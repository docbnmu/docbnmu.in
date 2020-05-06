import React from "react"
import NoticeBoard from "./post-notice"
import { Container, Carousel } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ImgA from "../images/gallery/Chem.BNMU14@2xx.jpg"
import ImgB from "../images/gallery/Chem.BNMU55@2xx.jpg"
import ImgC from "../images/gallery/Chem.BNMU36@2xx.jpg"
import ImgAb from "../images/gallery/Chem.BNMU14@2x.jpg"
import ImgBb from "../images/gallery/Chem.BNMU55@2x.jpg"
import ImgCb from "../images/gallery/Chem.BNMU36@2x.jpg"

const IndexPage = () => (
  <Layout pageInfo={{ pageName: "Home" }}>
    <SEO title="Home" keywords={[`docbnmu`, `bnmu`, `madhepura`]} />
    <Container>
      <Carousel>
        <Carousel.Item>
          <img
            className="img-fluid lazy"
            src={ImgA}
            srcSet={`${ImgA} 768w, ${ImgAb} 1920w`}
            alt="#"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="img-fluid lazy"
            src={ImgB}
            srcSet={`${ImgB} 768w, ${ImgBb} 1920w`}
            alt="#"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="img-fluid lazy"
            src={ImgC}
            srcSet={`${ImgC} 768w, ${ImgCb} 1920w`}
            alt="#"
          />
        </Carousel.Item>
      </Carousel>
    </Container>
    <hr></hr>
    <br></br>
    <br></br>
    <NoticeBoard />
  </Layout>
)
export default IndexPage
