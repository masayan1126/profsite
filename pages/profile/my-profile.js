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
          <Link href="/works/my-works">
            <a className="upper-left">Works</a>
          </Link>
          <Link href="/">
            <a className="upper-right">Top</a>
          </Link>
        </section>
        <section
          id="center"
          className="h-75 line-height-700
          mt-2 mt-sm-5 mt-md-5 md-responsive-center-secction-margin"
        >
          <PageTitle title={"Profile"} />
          <Row className="">
            <Col className="mb-2 offset-2 offset-sm-0 offset-md-0  col-8 col-sm-6 col-md-6 col-lg-6 text-right">
              <img className="prof-img-size" src="/my-image.jpg" alt="私の画像" />
            </Col>
            <Col className="mt-2 mt-sm-5 offset-3 offset-sm-0 offset-md-0 col-8 col-sm-6 col-md-6 col-lg-6 pl-0">
              <h5 className="text-white ">Im Front end Dev.</h5>
              <p className="text-white mb-0 font-size-p">Masaya Nishigaki</p>
              <p className="text-white mb-0 font-size-p">Osaka City</p>
              <p className="text-white mb-0 font-size-p">age 26</p>
            </Col>

          </Row>
        </section>
        <section id="bottom" className="h-10">
          <Link href="/skills/my-skills">
            <a className="lower-left">Skills</a>
          </Link>
          <Link href="/contact/contact">
            <a className="lower-right">Contact</a>
          </Link>
        </section>
      </Container>
    </div>
  );
}
