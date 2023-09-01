import { useState, useEffect } from "react";
import { createSocketConnection, EVENTS } from '@pushprotocol/socket';
import { ENV } from "@pushprotocol/socket/src/lib/constants";

import {
    useAccount,
    useConnect,
    useDisconnect,
    useEnsAvatar,
    useEnsName,
    useNetwork,
  } from 'wagmi'
import {
    mainnet,
    goerli,
    sepolia,
    polygon,
    optimism,
    arbitrum,
  } from 'wagmi/chains';

interface NotificationProps {
    setNotificationMessage: React.Dispatch<React.SetStateAction< any>>;
  }


const ChatPage = () => {

    const [notificationMessage, setNotificationMessage] = useState<any>(
        null
      );

    const handleNotification = (componentName: Text) => {
        setNotificationMessage(componentName);
    };

    const { address,connector} = useAccount()
    const userCAIP = `eip155:${polygon}:${address}`;


  const [sdkSocket, setSDKSocket] = useState<any>(null);
  const [isConnected, setIsConnected] = useState(sdkSocket?.connected);

  const addSocketEvents = () => {
    sdkSocket?.on(EVENTS.CONNECT, () => {
      setIsConnected(true);
    })

    sdkSocket?.on(EVENTS.DISCONNECT, () => {
      setIsConnected(false);
    })

    sdkSocket?.on(EVENTS.USER_FEEDS, (feedItem:any) => {
      /**
       * "feedItem" is the latest notification received
       */
      console.log(feedItem);
      handleNotification(feedItem)
    })
  };

  const removeSocketEvents = () => {
    sdkSocket?.off(EVENTS.CONNECT);
    sdkSocket?.off(EVENTS.DISCONNECT);
  };

  const toggleConnection = () => {
    if (sdkSocket?.connected) {
      sdkSocket.disconnect();
    } else {
      sdkSocket.connect();
    }
  };


  useEffect(() => {
    if (sdkSocket) {
      addSocketEvents();
    }
    return () => {
      removeSocketEvents();
    };
  }, [sdkSocket]);

  useEffect(() => {
    const connectionObject = createSocketConnection({
      user: userCAIP,
      env: 'dev' as ENV,
      socketOptions: { autoConnect: false }
    });


    setSDKSocket(connectionObject);

    return () => {
      if (sdkSocket) {
        sdkSocket.disconnect();
      }
    };
  }, []);

  return (
    <div>
      <h1>Socket Hello World</h1>

      <div>
        <p>Connection Status : {JSON.stringify(isConnected)}</p>

         {/* Display the notification message */}
         <p>
         <p>Notification: {notificationMessage || 'No notifications'}</p>
        </p>
    

        <button onClick={toggleConnection}>{isConnected ? 'disconnect' : 'connect'}</button>
      </div>
    </div>
  );
}

export default ChatPage;