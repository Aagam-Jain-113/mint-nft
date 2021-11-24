import React from 'react'
import SideBar from '../components/SideBar'

export default function Collaborators() {
    return (
        <div className="bg-primary h-screen">
            <div className="flex pt-5 items-center">
                <SideBar />
                <div className="text-center w-full">
                    <h1 className="text-primaryText tracking-widest text-4xl font-semibold">MINT NFT</h1>
                </div>
            </div>

            <p className="text-white text-4xl text-center ml-16 mt-20">Collaborators Page</p>
        </div>
    )
}
