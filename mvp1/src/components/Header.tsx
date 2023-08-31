import Head from "next/head";
import Link from "next/link";
import { api } from "~/utils/api";

//Rainbow Kit Connect button import
import { ConnectButton } from '@rainbow-me/rainbowkit';


export default function Header () {
    return(
        <section>
            <main className="flex flex-col items-center justify-center bg-[#0097b3]">
                <div className="container  min-h-[60px] max-h-[120px] flex flex-grow items-start justify-between gap-12 px-4 py-4 sm:py-8 md:py-12 lg:py-16 xl:py-20">
                    <div className="flex">
                        <img src="./192.png" className="max-h-[64px] items-center" alt="logo"/>
                        <h1 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl max-h-[64px]">
                            PEERUP
                        </h1>
                    </div>
                    <div className="items-center">
                        <ConnectButton />
                    </div>
                </div>
            </main>

        </section>
    )

}