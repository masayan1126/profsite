import Link from 'next/link'
import Head from 'next/head'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <div className="bg-color h-100">
      <Head>
        <title>home</title>
      </Head>
      <Container className="h-100">
        <Link href="/profile/my-profile">
          <a className="upper-left">Profile</a>
        </Link>
        <Link href="/works/my-works">
          <a className="upper-right">My Works</a>
        </Link>
        <Link href="/skills/my-skills">
          <a className="lower-left">My Skills</a>
        </Link>
        <Link href="/contact/contact">
          <a className="lower-right">Contact</a>
        </Link>

        <Row className="pt-180">
          <Col className="col-sm-6 col-12 p-0">
            <img src="/my-image.jpg" alt="私の画像" />
          </Col>
          <Link href="/">
            <Col className="col-sm-6 col-12 line-height-350">
              <h3 class="text-white">Thank you for visit!</h3>
              <p class="text-white">
                Im frontend developer. This page is my profile site.
              </p>
              <FontAwesomeIcon icon={faTwitter} />
            </Col>
          </Link>
        </Row>
      </Container>
    </div>
  );
}
