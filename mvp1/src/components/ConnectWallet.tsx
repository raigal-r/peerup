import { WalletConnect } from "@/features/WalletConnect/WalletConnect";
import { web3wallet } from "@/features/WalletConnect/WalletConnectUtils";
import { useCallback, useEffect, useState } from "react";
import Card from "./Card";
import truncateAddress from "@/utils/truncateAddress";
import { getSdkError } from "@walletconnect/utils";
import { useWcModalStore } from "@/features/WalletConnect/hooks/useWcModalStore";
import { UserCircleIcon } from "@heroicons/react/24/solid";

import { useRouter } from "next/router";


export default function ConnectWallet () {

    const [currentAccount, setCurrentAccount] = useState("");

    useEffect( () => {
        checkIfWalletIsConnected();
        }, [currentAccount]
    );

    const connectWallet() = async () => {
        try {

        } catch {

        }
    }


    return(
        <div>

        </div>
    )
}