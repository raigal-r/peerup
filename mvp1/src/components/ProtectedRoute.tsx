import { useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";

import {
    useAccount,
    useConnect,
    useDisconnect,
  } from 'wagmi'

function ProtectedRoute({ children }: any) {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);

  const { address, connector, isConnected } = useAccount()


  const authCheck = useCallback(
    (url: string) => {
      if (!isConnected) {
        setAuthorized(false);
        return router.push({ pathname: "/" });
      }

      setAuthorized(true);
    },
    [router, isConnected]
  );

  useEffect(() => {
    // on initial load - run auth check
    authCheck(router.asPath);

    // on route change start - hide page content by setting authorized to false
    const hideContent = () => setAuthorized(false);
    router.events.on("routeChangeStart", hideContent);

    // on route change complete - run auth check
    router.events.on("routeChangeComplete", authCheck);

    // unsubscribe from events in useEffect return function
    return () => {
      router.events.off("routeChangeStart", hideContent);
      router.events.off("routeChangeComplete", authCheck);
    };
  }, [authCheck, router.asPath, router.events]);

  return authorized && children;
}

export default ProtectedRoute;