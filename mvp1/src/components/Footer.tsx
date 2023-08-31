import Head from "next/head";
import Link from "next/link";
import { api } from "~/utils/api";

//Rainbow Kit Connect button import
import { ConnectButton } from '@rainbow-me/rainbowkit';

export default function Footer () {
    return(
        <section>
            <main>
                <div>
                    <div className="container-fluid min-h-[10px] flex flex-grow justify-between bg-[#0097b3] border-opacity-20 border-solid border-2 border-gray-100 rounded-xl">
                        <div className="flex flex-grow justify-around items-center ml-4 mt-4 mb-4">
                            <img src="./home-icon.svg" className="max-w-[100%]" alt="home-icon"/>
                            <img src="./chat-icon.svg" className="max-w-[100%]" alt="chat-icon"/>
                            <img src="./treasury-icon.svg" className="max-w-[100%]" alt="treasury-icon"/>
                            <img src="./contacts-icon.svg" className="max-w-[100%]" alt="contacts-icon"/>
                        </div>
                    </div>
                </div>
                
            </main>

        </section>
    )
}