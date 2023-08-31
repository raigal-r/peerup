import Head from "next/head";
import Link from "next/link";
import { api } from "~/utils/api";

import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { Suspense, useEffect } from "react";

import {
  useAccount,
  //useConnect,
  //useDisconnect,
  //useEnsAvatar,
  //useEnsName,
} from 'wagmi'

const Index = () => {

  const { address, connector, isConnected } = useAccount()

  const AppDynamic = dynamic(
    () => import("../components/StartPage").then((res) => res.default),
    {
      ssr: false,
    }
  );

  const router = useRouter();

  useEffect(() => {
    if (isConnected) {
      router.push({ pathname: "/home" }).catch(error => {
        console.error("Error navigating:", error);
      });
    }
  }, [router, isConnected]);
  

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
      <Suspense fallback={<div>Loading...</div>}>
        <AppDynamic />
      </Suspense>
    </>
  );
};

export default Index;