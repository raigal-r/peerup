import Image from "next/image";

import homeIcon from "./home-icon.svg"
import chatIcon from "./chat-icon.svg"
import treasuryIcon from "./treasury-icon.svg"
import contactsIcon from "./contacts-icon.svg"

export default function TeamFooter () {
    return(
        <section>
            <main className="MyApp">
                <div>
                    <div className="container-fluid min-h-[10px] flex flex-grow justify-between bg-[#0097b3] border-opacity-20 border-solid border-2 border-gray-100 rounded-xl">
                        <div className="flex flex-grow justify-around items-center ml-4 mt-4 mb-4">
                            <div>
                                <Image src={homeIcon} className="max-w-[100%]" alt="home-icon"/>
                            </div>
                            <div>
                                <Image src={chatIcon} className="max-w-[100%]" alt="chat-icon"/>  
                            </div>
                            <div>
                                <Image src={treasuryIcon} className="max-w-[100%]" alt="treasury-icon"/>
                            </div>
                            <div>
                                <Image src={contactsIcon} className="max-w-[100%]" alt="contacts-icon"/>
                            </div>
                        </div>
                    </div>
                </div>
                
            </main>

        </section>
    )
}