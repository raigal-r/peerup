import { useRouter } from "next/router";


//Rainbow Kit Connect button import
import { ConnectButton } from '@rainbow-me/rainbowkit';

const Header = () => {

    const router = useRouter();

    return(
        <section>
            <main>
                <div>
                    <div className="container-fluid min-h-[10px] flex flex-grow justify-between bg-[#0097b3] border-opacity-20 border-solid border-2 border-gray-100 rounded-xl">
                        <div className="flex justify-start items-center ml-4 mt-4 mb-4">
                            <img src="./192.png" className="max-w-[15%]" alt="logo"/>
                            <h1 className="font-extrabold tracking-tight text-white sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl max-h-[64px]">
                                PEERUP
                            </h1>
                        </div>
                        <div className="flex justify-center items-center mr-4 mt-4 mb-4">
                            <div >
                                <ConnectButton />
                            </div>  
                        </div>
                    </div>
                </div>
                
            </main>

        </section>
    )
}
export default Header;