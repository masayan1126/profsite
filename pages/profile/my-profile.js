import Link from "next/link";
import Head from "next/head";
import { Container, Row, Col, Form, Button, Carousel } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faStore } from "@fortawesome/free-solid-svg-icons";
import PageTitle from '../../components/Title'

export default function showWorks() {
  return (
    <div className="bg-color h-100">
      <Head>
        <title>Profile</title>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1.0"
        ></meta>
      </Head>
      <Container className="h-100 w-100 mx-auto">
        <section id="top" className="h-10">
          <Link href="/service/my-service">
            <a className="upper-left">/ Service</a>
          </Link>
          <Link href="/">
            <a className="upper-right">/ Top</a>
          </Link>
        </section>
        <section
          id="center"
          className="h-75 line-height-700
          md-responsive-center-secction-margin fadein__bottom__fast"

        >
          <PageTitle title={"Profile"} />
          <Row className="mx-auto">
            <Col className="mx-auto col-12 col-sm-6 col-md-6 col-lg-6 img__profile">
              <img className="prof__img__size" src="/undraw_male_avatar_323b.svg" alt="私の画像" />
            </Col>
            <Col className="col-12 col-sm-6 col-md-6 col-lg-6">
              <h5 className="p__profile">Im Front end Dev.</h5>
              <p className="p__profile mb-0 font-size-p">Name : Masaya Nishigaki</p>
              <p className="p__profile mb-0 font-size-p">From : Osaka City</p>
              <p className="p__profile mb-0 font-size-p">age : 26</p>
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
