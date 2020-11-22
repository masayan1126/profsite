import PageTitle from '../../components/Title'
import Link from "next/link";
import Head from "next/head";
import { Container, Row, Col, Form, Button, Carousel } from "react-bootstrap";
import React, { useCallback, useState, useEffect } from 'react';
// import { WEBHOOK_URL } from "../../webhook/webhookConfig";

export default function showContactForm() {

const [username, setUsername] = useState(''),
    [email, setEmail] = useState(''),
  [inquiry, setInquiry] = useState('');

const inputUsername = useCallback((event) => {
  setUsername(event.target.value)
},[setUsername]);

const inputEmail = useCallback((event) => {
  setEmail(event.target.value)
},[setEmail]);

const inputInquiry = useCallback((event) => {
  setInquiry(event.target.value)
},[setInquiry]);

const submitForm = (username, email, inquiry) => {
  const payload = {
        text: 'お問い合わせがありました\n'
            + 'お名前: ' + username + '\n'
            + 'メールアドレス: ' + email + '\n'
            + '【問い合わせ内容】\n' + inquiry
  };

    // fetchメソッドでフォームの内容をSlackのIncoming Webhook URL に送信する
    fetch(WEBHOOK_URL, {
        method: 'POST',
        body: JSON.stringify(payload)
    }).then(() => {
        alert('送信が完了しました。追ってご連絡いたします');
        setInquiry("")
    })
  }


  return (
    <>
    <div className="h-100">
      <Head>
        <title>Contact</title>
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
            <a className="upper-right a__link__menu">/ Top</a>
          </Link>
        </section>
        <section
          id="center"
            className="h-75 section__contact text-center
            mx-auto fadein__bottom__fast"
        >

            <div className="login-page">
            <div className="form">
              <h2 className= "text-center mb-5">Contact</h2>
            <Form className="text-left">
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>お名前</Form.Label>
                    <Form.Control type="name" placeholder="name" value={username}
                      onChange={inputUsername} />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>メールアドレス</Form.Label>
                    <Form.Control type="email" placeholder="mail@example.com" value={email}
                      onChange={inputEmail}
                    />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>お問い合わせ内容</Form.Label>
                    <Form.Control as="textarea" rows={2} value={inquiry}
                      onChange={inputInquiry}
                    />
              </Form.Group>
              <Button onClick={() => submitForm(username, email, inquiry )} className="contact__button">お問い合わせ</Button>
            </Form>

          </div>
          </div>

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
    </>
  )
}
