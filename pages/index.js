import Head from "next/head";
import Image from "next/legacy/image";
import Hero from "../components/home/hero";
import Layout from "../components/layout";
export default function Home() {
  return (
    <Layout>
      <Head>
        <title> Lifeflavor Coding 포트폴리오</title>
        <meta name="description" content="오늘도 인생의맛(lifeflavor) 코딩" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="flex min-h-screen  flex-col items-center justify-center  text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <Hero />
        </div>
      </section>
    </Layout>
  );
}
