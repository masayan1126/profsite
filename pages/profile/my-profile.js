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
          <img src="/myface.JPG" alt="私の画像" />
        </div>
      </Layout>
    </div>
  )
}
