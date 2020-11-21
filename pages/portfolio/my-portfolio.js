import Link from "next/link";
import Head from "next/head";
import { Container, Row, Col, Form, Button, Carousel } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faStore } from "@fortawesome/free-solid-svg-icons";
import SkillsChart from '../../components/skill-chart'
import PageTitle from '../../components/Title'

export default function showWorks() {
  return (
    <div className="h-100">
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
            <a className="upper-left">/ Profile</a>
          </Link>
          <Link href="/">
            <a className="upper-right">/ Top</a>
          </Link>
        </section>
        <section
          id="center"
          className="h-75 mx-auto mt-5"
        >
          <PageTitle title={"Portfolio"} />

          <Row className="">
            <Col
              className="mb-5 col-12 col-sm-12 mx-auto col-md-6 col-lg-6 fadein__bottom__fast c__portfolio"
            >
              <Row className="mx-auto">
                <Col className="col-6 col-md-12 pr-0 col-lg-12 h-100 mb-3">
                  <h5 className="mb-1 service__title text-left">Recette</h5>
                  <p className="service__description text-left">レシピアプリ</p>
                  <img className="portfolio__img__size" src="/recette.png" alt="" />
                </Col>

                <Col className="col-6 col-md-12 col-lg-12 h-100 mb-3">
                  <h5 className="mb-1 service__title text-left">Tailler Case</h5>
                  <p className="service__description text-left">オーダーメイド商品ECサイト</p>
                  <img className="portfolio__img__size" src="/case-shop.png" alt="" />
                </Col>

              </Row>
            </Col>
            <Col
              className="mb-5 col-12 col-sm-12 mx-auto col-md-6 col-lg-6 fadein__bottom__fast c__portfolio"
            >
              <Row className="mx-auto">
                <Col className="col-6 col-md-12 pr-0 col-lg-12 h-100 mb-3">
                  <h5 className="mb-1 service__title text-left">My Fitness</h5>
                  <p className="service__description text-left">フィットネス
                  管理アプリ</p>
                  <img className="portfolio__img__size" src="/My Fitness.JPEG" alt="" />
                </Col>

                <Col className="col-6 col-md-12 col-lg-12 h-100 mb-3">
                  <h5 className="mb-1 service__title text-left">Comming Soon</h5>
                  <p className="service__description text-left">Comming Soon</p>
                  <img className="portfolio__img__size" src="/undraw_not_found_60pq.svg" alt="" />
                </Col>

              </Row>
            </Col>


          </Row>
        </section>
        <section id="bottom" className="h-10">
          <Link href="/service/my-service">
            <a className="lower-left">/ Service</a>
          </Link>
          <Link href="/contact/contact">
            <a className="lower-right">/ Contact</a>
          </Link>
        </section>
      </Container>
    </div>
  );
}
