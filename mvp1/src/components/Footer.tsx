import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";


import homeIcon from "../../public/home-icon.svg"; 
import chatIcon from "../../public/chat-icon.svg";
import notificationsIcon from "../../public/notifications-icon.svg";
import profileIcon from "../../public/profile-icon.svg";

interface FooterProps {
    setSelectedComponent: React.Dispatch<React.SetStateAction<'home' | 'chat' | 'notification' | 'profile' | null>>;
  }

const Footer: React.FC<FooterProps> = ({setSelectedComponent }) => {

    const router = useRouter();

    const handleClick = (componentName: 'home' | 'chat' | 'notification' | 'profile') => {
        setSelectedComponent(componentName);
    };

    return(
        <section>
            <main>
                <div>
                    <div className="container-fluid min-h-[10px] flex flex-grow justify-between bg-[#0097b3] border-opacity-20 border-solid border-2 border-gray-100 rounded-xl">
                        <div className="flex flex-grow justify-around items-center ml-4 mt-4 mb-4">

                            <button className="cursor-pointer" onClick={() => handleClick('home')}>
                                <Image src={homeIcon as "*.svg"} className="max-w-[100%]" alt="home-icon"/>
                            </button>
                            <button className="cursor-pointer" onClick={() => handleClick('chat')}>
                                <Image src={chatIcon as "*.svg"} className="max-w-[100%]" alt="chat-icon"/>  
                            </button>
                            <div className="cursor-pointer" onClick={() => handleClick('notification')}>
                                <Image src={notificationsIcon as "*.svg"} className="max-w-[100%]" alt="notifications-icon"/>
                            </div>
                            <div className="cursor-pointer" onClick={() => handleClick('profile')}>
                                <Image src={profileIcon as "*.svg"} className="max-w-[100%]" alt="profile-icon"/>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

        </section>
    )
}

export default Footer;