import Head from "next/head";
import Link from "next/link";
import { api } from "~/utils/api";

//Rainbow Kit Connect button import
import { ConnectButton } from '@rainbow-me/rainbowkit';

export default function Header () {
    return(
        <section>
            <main className="bg-[#0097b3]">
                <div className="container-fluid min-h-[10px] flex flex-grow justify-between bg-[#0097b3] border-opacity-20 border-solid border-2 border-gray-100 rounded-xl pr-5 pl-5">
                    <div className="flex justify-start items-center ml-4 mt-4 mb-4">
                        <img src="./192.png" className="max-w-[20%]" alt="logo"/>
                        <h1 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl max-h-[64px]">
                            PEERUP
                        </h1>
                    </div>
                    <div className="flex justify-center items-center mr-4 mt-4 mb-4">
                        <div >
                            <ConnectButton />
                        </div>  
                    </div>
                </div>
            </main>

        </section>
    )
}