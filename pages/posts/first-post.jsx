import Link from "next/link"
import Image from "next/image"
import Head from "next/head"
import Script from "next/script"
import Layout from "../../components/layout"


const FirstPost = () => {
    return (
    <>
    <Layout>
    <Head>
        <title>My first post</title>
    </Head>
    <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
    <h1>My first post</h1>
    <h2><Link href='/'>Back to home</Link></h2>
    </Layout>
    </>
    )
}

export default FirstPost