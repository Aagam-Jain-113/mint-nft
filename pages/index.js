import Head from 'next/head'
import DynamicTable from '../components/DynamicTable';
import SideBar from '../components/SideBar';

export default function Home() {
  return (
    <div className="bg-primary min-h-screen">
      <Head>
        <title>MINT NFT</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex pt-5 items-center">
        <SideBar />
        <div className="text-center w-full">
          <h1 className="text-primaryText tracking-widest text-4xl font-semibold">MINT NFT</h1>
        </div>
      </div>

      <div className="mt-12">
        <div className="flex justify-center items-center">
          <p className="font-semibold uppercase text-2xl tracking-wider text-secondaryText">Add collaborators / Co - contributors </p>
          <p className="w-8 h-8 text-center text-2xl ml-4 bg-secondary rounded-full">i</p>
        </div>
        <DynamicTable />
      </div>
    </div>
  )
}
