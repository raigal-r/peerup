import Head from "next/head";
import Link from "next/link";
import { api } from "~/utils/api";

//Rainbow Kit Connect button import
import { ConnectButton } from '@rainbow-me/rainbowkit';


export default function StartPage () {
    return(
        <section>
            <main className="flex min-h-screen flex-col items-center justify-around bg-[#0097b3]">
                <div className="flex flex-col items-center justify-center border-dotted border-2 border-gray-400" >
                    <img src="./192.png"/>
                    <h1 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                        PEERUP
                    </h1>
                    <div className="w-[60vw]">
                        <p className="text-xl text-center tracking-tight text-white mt-10 sm:text-xl md:text-xl lg:text-xl xl:text-xl">
                            Welcome in PEERUP the decentralized financial management with chat for teams and small communities  
                        </p>
                    </div>
                    <h2 className="text-xl font-bold text-center tracking-tight text-white mt-10 sm:text-xl md:text-xl lg:text-xl xl:text-xl">
                        To join you can:                    
                    </h2>
                </div>

                <div className="flex flex-col mt-5 items-center justify-around border-dotted border-2 border-gray-400">
                    <div className="text-center mb-10">
                        <p className="text-xl w-[50vw] text-center tracking-tight text-white mb-2 sm:text-xl md:text-xl lg:text-xl xl:text-xl">
                            Connect with an existing wallet:
                        </p>
                        <div className="flex items-center justify-center">
                            <ConnectButton />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-around opacity-60 border-dotted border-2 border-gray-400 bg-[#0097b3] rounded-xl pr-5 pl-5 mb-10">
                    
                    <div className="mb-10">
                        <div className="mb-4">
                            <h2 className="text-xl font-bold text-center tracking-tight text-white mt-10 sm:text-xl md:text-xl lg:text-xl xl:text-xl">
                                Comming soon:                   
                            </h2>
                        </div>

                        <div className="flex flex-col items-center justify-center mb-4 ">
                            <div>
                                <p className="text-xl tracking-tight text-white mb-2">
                                    Connect using your Google account:
                                </p>
                            </div>
                            <div className="google-btn backdrop-blur-md">
                                <div className="google-icon-wrapper">
                                    <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
                                </div>
                                <p className="btn-text"><b>Sign in with google</b></p>
                            </div>
                            
                        </div>

                    </div>
                        
                </div>
            </main>

        </section>
    )

}