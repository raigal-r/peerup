//Rainbow Kit Connect button import
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Image from "next/image";

import homeIcon from "./home-icon.svg"
import chatIcon from "./home-icon.svg"
import notificationsIcon from "./home-icon.svg"
import profileIcon from "./home-icon.svg"


export default function Footer () {
    return(
        <section>
            <main>
                <div>
                    <div className="container-fluid min-h-[10px] flex flex-grow justify-between bg-[#0097b3] border-opacity-20 border-solid border-2 border-gray-100 rounded-xl">
                        <div className="flex flex-grow justify-around items-center ml-4 mt-4 mb-4">
                            <div>
                                <Image src={homeIcon} className="max-w-[100%]" alt="home-icon"/>
                            </div>
                            <div>
                                <img src={chatIcon} className="max-w-[100%]" alt="chat-icon"/>  
                            </div>
                            <div>
                                <img src={notificationsIcon} className="max-w-[100%]" alt="notifications-icon"/>
                            </div>
                            <div>
                                <img src={profileIcon} className="max-w-[100%]" alt="profile-icon"/>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

        </section>
    )
}