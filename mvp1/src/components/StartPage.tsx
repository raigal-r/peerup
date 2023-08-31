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
                    <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl max-h-[64px]">
                        PEERUP
                    </h1>∫
                    <div className="w-[75vw]">
                        <p className="text-xl text-center tracking-tight text-white sm:text-xl md:text-xl lg:text-xl xl:text-xl mb-20">
                            Welcome in PEERUP the decentralized financial management with chat for teams and small communities  
                        </p>
                    </div>
                    <h2 className="text-xl font-bold text-center tracking-tight text-white sm:text-xl md:text-xl lg:text-xl xl:text-xl">
                        To join you can:                    
                    </h2>
                </div>

                <div className="flex flex-col items-center justify-around">
                    <div className="text-center ">
                        <p className="text-xl w-[75vw] text-center tracking-tight text-white  sm:text-xl md:text-xl lg:text-xl xl:text-xl mb-4">
                            Connect with an existing wallet:
                        </p>
                        <div className="flex items-center justify-center">
                            <ConnectButton />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-around mb-10 border-opacity-5 bg-[#0097b3] border-solid border-2 border-gray-100 rounded-xl pr-5 pl-5">
                    
                    <div className="opacity-50">  
                        <div className="flex flex-col items-center justify-center mb-4">
                            <div className="mb-4">
                                <p className="text-xl tracking-tight text-white">
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
                        <div>
                            <h2 className="text-xl font-bold text-center tracking-tight text-white sm:text-xl md:text-xl lg:text-xl xl:text-xl">
                                Comming soon                 
                            </h2>
                        </div>

                    </div>
                        
                </div>
            </main>

        </section>
    )

}