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

      </Head>
      <div className="box-shadow margin-10px">
        <Header />
      </div>
      <div>
        
      </div>
      
      </div>
    </>
  );
}
