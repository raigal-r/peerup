import Head from "next/head";
import Link from "next/link";
import { api } from "~/utils/api";

//Rainbow Kit Connect button import
import { ConnectButton } from '@rainbow-me/rainbowkit';


export default function StartPage () {
    return(
        <section>
            <main className="flex min-h-screen flex-col items-center justify-around bg-[#0097b3]">
                <div className="flex flex-col items-center justify-center" >
                    <img src="./192.png"/>
                    <h1 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                        Title
                    </h1>
                    <h3 className="text-xl font-bold tracking-tight text-white sm:text-xl md:text-xl lg:text-xl xl:text-xl">
                        Text
                    </h3>
                </div>
                <div className="flex flex-col items-center justify-center ">
                        <button className="btn">
                            Connect with GOOGLE
                        </button>
                        <button className="btn">
                            Creacte Wallet
                        </button>
                        <ConnectButton />
                </div>
            </main>

        </section>
    )

}