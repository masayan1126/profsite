import Link from "next/link";
import Head from "next/head";
import { Container, Row, Col, Form, Button, Carousel } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faStore } from "@fortawesome/free-solid-svg-icons";
import PageTitle from '../../components/Title'

export default function showWorks(props) {
  return (
    <div className="h-100">
      <Head>
        <title>Works</title>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1.0"
        ></meta>
      </Head>
      <Container className="h-100 w-100 mx-auto  text-center">
        <section id="top" className="h-10">
          <Link href="/profile/my-profile">
            <a className="upper-left">/ Profile</a>
          </Link>
          <Link href="/">
            <a className="upper-right">/ Top</a>
          </Link>
        </section>
        <section
          id="center"
          className="h-75 section__service"

        >
          <h2 className= "text-center mb-3">Service</h2>

          <Row className="text-center">
            <Col
              className="mb-5 offset-2 col-10 col-sm-12 mx-auto col-md-4 col-lg-4 fadein__bottom__fast"
            >
              <Row className="mx-auto">
                <Col className="col-6 col-md-12 pr-0 col-lg-12">
                  <img className="service__img__size" src="/undraw_web_devices_ad58.svg" alt="" />
                </Col>
                <Col className="col-6 col-md-12 col-lg-12">
                  <h5 className="mt-4 service__title">Webアプリ開発</h5>
                  <p className="service__description text-left">小中規模のアプリケーション開発が可能です</p>
                </Col>
              </Row>
            </Col>

            <Col
              className="mb-5 offset-2 col-10 col-sm-12 mx-auto col-md-4 col-lg-4 fadein__bottom__middle"
            >
              <Row className="mx-auto">
                <Col className="col-6 col-md-12 pr-0 col-lg-12">
                  <img className="service__img__size" src="/undraw_wordpress_utxt.svg" alt="" />
                </Col>
                <Col className="col-6 col-md-12 col-lg-12">
                  <h5 className="mt-4 service__title">EC/HP/LP制作</h5>
                  <p className="service__description text-left">WordPressでのサイト作成(一からの設計も可)</p>
                </Col>
              </Row>
            </Col>

            <Col className="mb-5 offset-2 col-10 col-sm-12 mx-auto col-md-4 col-lg-4 fadein__bottom__slow">
              <Row className="mx-auto">
                <Col className="col-6 col-md-12 col-lg-12 pr-0">
                  <img className="service__img__size" src="/undraw_search_engines_nn9e.svg" alt="" />
                </Col>
                <Col className="col-6 col-md-12 col-lg-12">
                  <h5 className="mt-4 service__title">SE0対策</h5>
                  <p className="service__description text-left">成果につながるデザイン設計とコーディング</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </section>
        <section id="bottom" className="h-10">
          <Link href="/portfolio/my-portfolio">
            <a className="lower-left">/ Portfolio</a>
          </Link>
          <Link href="/contact/contact">
            <a className="lower-right">/ Contact</a>
          </Link>
        </section>
      </Container>
    </div>
  );
}
