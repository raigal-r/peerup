import Head from "next/head";
import Link from "next/link";
import { api } from "~/utils/api";

//Rainbow Kit Connect button import
import { ConnectButton } from '@rainbow-me/rainbowkit';


export default function StartPage () {
    return(
        <section>
            <main className="flex min-h-screen flex-col items-center justify-center bg-[#0097b3]">
                <div className="container h-[64px] flex flex-grow items-start justify-between gap-12 px-4 py-16 ">
                    <div>
                        <img src="./192.png" className="max-h-[64px] items-center" alt="logo"/>
                        <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-[3rem] max-h-[64px] items-center">
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