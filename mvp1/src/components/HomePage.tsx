//Rainbow Kit Connect button import
import Header from './Header';
import Footer from './Footer';

//Router
import dynamic from "next/dynamic";
import { Suspense } from "react";

//Other pages from button
import ChatPage from './ChatPage';
import NotificationsPage from './NotificationsPage';
import ProfilePage from './ProfilePage';
import YourGroupsPage from './YourGroupsPage';
import { useState } from "react";



export default function HomePage () {

    const [selectedComponent, setSelectedComponent] = useState<'home' | 'chat' | 'notification' | 'profile' | null>(
        null
      );

    return(
        <section>
            <div className="MyApp flex flex-col min-h-screen bg-[#0097b3] items-between justify-between">
            <Header/>
            {/* Conditionally render different components based on selectedComponent */}
            {selectedComponent === null && <YourGroupsPage />}
            {selectedComponent === 'home' && <YourGroupsPage />}
            {selectedComponent === 'chat' && <ChatPage />}
            {selectedComponent === 'notification' && <NotificationsPage />}
            {selectedComponent === 'profile' && <ProfilePage />}
            <Footer setSelectedComponent={setSelectedComponent} />
            </div>
        </section>
    )

}
