import Head from 'next/head'
import Layout from '../../components/layout'

export default function showProfiles() {
  return (
    <div>
      <Layout>
        <Head>
          <title>my profile</title>
        </Head>
        <h1>My Profile</h1>
        <div>
          <img src="/my-image.jpg" alt="私の画像" />
        </div>
      </Layout>
    </div>
  );
}
