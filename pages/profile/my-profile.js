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
    <div className="h-100">
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
          className="h-75
          section__profile fadein__bottom__fast"

        >
          <h2 className= "text-center"></h2>
          <Row className="mx-auto">
            <Col className="mx-auto col-12 col-sm-10 col-md-6 col-lg-6 img__profile">
              <img className="prof__img__size" src="/profile_image.jpg" alt="私の画像" />
            </Col>
            <Col className="col-12 col-sm-10 col-md-6 col-lg-6 p__profile">
              <h5 className="">Name<span className="ml-2 mb-0 font-size-p">Masaya Nishigaki</span></h5>
              <hr/>
              <h5 className="mb-0">Address<span className="ml-2 mb-0 font-size-p">Osaka City</span></h5>
              <hr/>
              <h5 className="mb-0">age<span className="ml-2 mb-0 font-size-p">27</span></h5>
              <hr />

              <h5 className="mb-0">Email<span className="ml-2 mb-0 font-size-p">masa199311266@gmail.com</span></h5>
              <hr />

              <h5 className="mb-0">Skill<span className="ml-2 mb-0 font-size-p">Javascript、PHP</span></h5>
              <hr/>

            </Col>

          </Row>
        </section>
        <section id="bottom" className="h-10">
          <Link href="/portfolio/my-portfolio">
            <a className="lower-left">/ Portfolio</a>
          </Link>
          <Link href="/profile/my-profile">
            <a className="lower-right color__yellow">/ Profile</a>
          </Link>
        </section>
      </Container>
    </div>
  );
}
