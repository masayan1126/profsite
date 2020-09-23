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
      </Head>
      <Container className="h-100 w-75 mx-auto">
      <section id="top" className="h-10">
        <Link href="/profile/my-profile">
          <a className="upper-left">Profile</a>
        </Link>
        <Link href="/works/my-works">
          <a className="upper-right">My Works</a>
        </Link>
      </section>
        <section id="center" className="h-75 line-height-700">
          <Row className="">
            <Col className="col-12 mt-5 text-center">
              <img src="/my-image.jpg" alt="私の画像" />
            </Col>
              <Col className="col-12 line-height-350 text-center">
                <h3 class="text-white">Thank you for visit!</h3>
                <p class="text-white m-0">
                  Im frontend developer.</p>
                <p class="text-white">
                  This page is my profile site.</p>
              </Col>
          </Row>
          <ul className="text-center p-0">
            <span className="mr-2">
            <Link href="https://twitter.com/masayanishigaki">
                <FontAwesomeIcon icon={faTwitter} />
              </Link>
            </span>
            <span className="mr-2">
              <Link href="https://www.instagram.com/masaya_nishigaki/">
                <FontAwesomeIcon icon={faInstagram} />
              </Link>
            </span>
            <span className="mr-1">
              <Link href="https://smartphonecaseshop.net/shop/">
                <FontAwesomeIcon icon={faStore} />
              </Link>
            </span>
          </ul>
        </section>
        <section id="bottom" className="h-10">
          <Link href="/skills/my-skills">
          <a className="lower-left">My Skills</a>
        </Link>
          <Link href="/contact/contact">
            <a className="lower-right">Contact</a>
          </Link>
        </section>
      </Container>
    </div>
  );
}
