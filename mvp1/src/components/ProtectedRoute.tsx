import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { ReactNode } from "react"; // Import ReactNode type


import {
    useAccount,
    //useConnect,
    //useDisconnect,
  } from 'wagmi'

function ProtectedRoute({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);

  const { address, connector, isConnected } = useAccount()

  const authCheck = useCallback(
    (url: string) => {
      if (!isConnected) {
        setAuthorized(false);
        navigateToHomePage(); // Call the asynchronous function
        return;
      }
  
      setAuthorized(true);
    },
    [isConnected]
  );
  
  const navigateToHomePage = () => {
    router.push({ pathname: "/" })
      .then(() => {
        // Success
      })
      .catch(error => {
        console.error("Error navigating:", error);
      });
  };

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