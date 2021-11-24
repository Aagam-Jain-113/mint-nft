import Head from 'next/head'
import DynamicTable from '../components/DynamicTable';
import SideBar from '../components/SideBar';
import Link from 'next/link';

export default function Home() {

  const pages = [
    {
      id: 1,
      title: "details",
      link: "/Details",
    },
    {
      id: 2,
      title: "Pricing",
      link: "/Pricing",
    },
    {
      id: 3,
      title: "Collaborators",
      link: "/Collaborators",
    },
    {
      id: 4,
      title: "mint nft",
      link: "/mintNft",
    },
  ]
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

      <ul className="list-none mt-12 justify-center flex space-x-4">
        {pages.map(({ id, title, link }) => {
          return (
            <li className="text-white uppercase" key={id}>
              <Link href={link}>
                {id === 4 ? <p>{title}</p> : <p>{title + " >"}</p>}
              </Link>
            </li>
          )
        })}
      </ul>

      <Link href="/mintNft">
        <button className="bg-white px-4 py-2 h-10 block mx-auto mt-10 w-40">
          {`Next Page >`}
        </button>
      </Link>
    </div>
  )
}
