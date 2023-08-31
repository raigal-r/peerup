import Head from "next/head";
import Link from "next/link";
import { api } from "~/utils/api";

//Rainbow Kit Connect button import
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Header from "../components/Header";
import StartPage from "../components/StartPage";





export default function Home() {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
    <div className="base">
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
  
      <Header />
      <StartPage/>
  
      </div>
    </>
  );
}
