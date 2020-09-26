import Link from "next/link";
import Head from "next/head";
import { Container, Row, Col, Form, Button, Carousel } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faStore } from "@fortawesome/free-solid-svg-icons";
import SkillsChart from '../../components/skill-chart'

export default function showWorks() {
  return (
    <div className="bg-color h-100">
      <Head>
        <title>Skills</title>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1.0"
        ></meta>
      </Head>
      <Container className="h-100 w-100 mx-auto">
        <section id="top" className="h-10">
          <Link href="/profile/my-profile">
            <a className="upper-left">Profile</a>
          </Link>
          <Link href="/">
            <a className="upper-right">Top</a>
          </Link>
        </section>
        <section
          id="center"
          className="h-75 line-height-700 mt-5 md-responsive-center-secction-margin"
        >
          <h3 className="text-center mb-3">Skills</h3>
          <SkillsChart />
          <Row className="">
            <Col className="mb-2 offset-2 offset-sm-0 offset-md-4 col-8 col-sm-6 col-md-4 col-lg-4"></Col>
            <Col className="mb-2 offset-12 offset-sm-0 offset-md-12 col-12 col-sm-6 col-md-12 col-lg-4"></Col>
            <Col className="mb-2 offset-2 offset-sm-0 col-8 col-sm-6 col-md-4 col-lg-4"></Col>
            <Col className="offset-2 col-8 offset-sm-0 col-sm-6 col-md-4 col-lg-4"></Col>
            <Col className="col-12"></Col>
          </Row>
        </section>
        <section id="bottom" className="h-10">
          <Link href="/works/my-works">
            <a className="lower-left">Works</a>
          </Link>
          <Link href="/contact/contact">
            <a className="lower-right">Contact</a>
          </Link>
        </section>
      </Container>
    </div>
  );
}
