import Link from 'next/link'
import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>home</title>
      </Head>
      <Link href="/profile/my-profile"><a>My Profile</a></Link>
      <Link href="/works/my-works"><a>My Works</a></Link>
      <Link href="/skills/my-skills"><a>My Skills</a></Link>
      <Link href="/contact/contact"><a>Contact</a></Link>
    </div>
  )
}
