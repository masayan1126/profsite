import Link from 'next/link'
import Head from 'next/head'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faStore } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  return (
    <div className="bg-color h-100">
      <Head>
        <title>home</title>
        <meta name="viewport" content="width=device-width,initial-scale=1.0"></meta>
      </Head>
      <Container className="h-100 w-100 mx-auto">
      <section id="top" className="h-10">
        <Link href="/profile/my-profile">
          <a className="upper-left">/ Profile</a>
        </Link>
        <Link href="/service/my-service">
          <a className="upper-right">/ Service</a>
        </Link>
      </section>
        <section id="center" className="h-75 line-height-700 md-responsive-center-secction-margin">
          <Row className="">
            <Col className="col-12 text-center fadein__bottom__fast">
              <img className="top-img-size" src="/undraw_code_thinking_1jeh.svg" alt="" />


            </Col>
              <Col className="col-12 line-height-350 text-center fadein__bottom__middle">
                <h3 class="text-black">Thank you!</h3>
                <p class="text-black m-0">
                  Im frontend developer.</p>
                <p class="text-black">
                  This page is my profile site.</p>
                <Button className="contact__button">お問い合わせ</Button>
              </Col>
          </Row>
          <ul className="text-center p-0 fadein__bottom__slow">
            <span className="mr-2">
            <Link href="https://twitter.com/masayanishigaki">
                <FontAwesomeIcon className="icon" icon={faTwitter} />
              </Link>
            </span>
            <span className="mr-2">
              <Link href="https://www.instagram.com/masaya_nishigaki/">
                <FontAwesomeIcon className="icon" icon={faInstagram} />
              </Link>
            </span>
            <span className="mr-1">
              <Link href="https://smartphonecaseshop.net/shop/">
                <FontAwesomeIcon className="icon" icon={faStore} />
              </Link>
            </span>
          </ul>
        </section>
        <section id="bottom" className="h-10">
          <Link href="/skills/my-skills">
          <a className="lower-left">/ Skills</a>
        </Link>
          <Link href="/contact/contact">
            <a className="lower-right">/ Contact</a>
          </Link>
        </section>
      </Container>
    </div>
  );
}
