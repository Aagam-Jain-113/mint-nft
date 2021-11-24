import Head from 'next/head'
import SideBar from '../components/SideBar';

export default function Home() {
  return (
    <div className="bg-primary h-screen">
      <Head>
        <title>MINT NFT</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex pt-5 items-center">
        <SideBar />
        <div className="text-center w-full">
          <h1 className="text-primaryText text-4xl font-semibold">MINT NFT</h1>
        </div>
      </div>
    </div>
  )
}
