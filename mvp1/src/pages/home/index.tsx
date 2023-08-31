import ProtectedRoute from "../../components/ProtectedRoute";
import dynamic from "next/dynamic";
import { Suspense } from "react";

import Head from "next/head";

const Index = () => {
  const AppDynamic = dynamic(
    () => import("../../components/HomePage").then((res) => res.default),
    {
      ssr: false,
    }
  );

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
        <ProtectedRoute>
            <AppDynamic />
        </ProtectedRoute>
      </Suspense>
    </>
  );
};

export default Index;