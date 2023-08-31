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
      <Suspense fallback={<div>Loading...</div>}>
        <AppDynamic />
      </Suspense>
    </>
  );
};

export default Index;