import Head from "next/head";
import Link from "next/link";
import { api } from "~/utils/api";

//Rainbow Kit Connect button import
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Header from "../components/Header";
import Footer from "../components/Footer";
import StartPage from "../components/StartPage";
import HomePage from "../components/HomePage";






export default function Home() {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>PEERUP</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        {/* import manifest for the PWA configuration*/}
        <link rel="manifest" href="/manifest.json" />

        {/* import manifest for the Roboto font family*/}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Orbitron&family=Roboto:wght@100&display=swap" rel="stylesheet" />
      </Head>

      <div className="flex flex-col min-h-screen min-w-screen bg-[#0097b3] items-center justify-between" >
        <div className="min-w-screen">
          <Header />
        </div>
        <div>
          <HomePage/>
        </div>
        <div className="min-w-screen">
          <Footer/>
        </div>
      </div>
    </>
  );
}
