import { useState } from "react";
import { Connection, clusterApiUrl, PublicKey } from "@solana/web3.js";
import "./Wallet.css";

declare global {
  interface Window {
    solana?: any;
  }
}

interface ConnectWalletProps {
  connected: boolean;
  setConnected: React.Dispatch<React.SetStateAction<boolean>>;
}

async function connectWallet({ connected, setConnected }: ConnectWalletProps) {
  const provider:
    | {
        isPhantom?: boolean;
        disconnect?: () => Promise<void>;
        connect?: () => Promise<void>;
        publicKey?: { toString: () => string };
      }
    | undefined = window.solana;
  if (provider && provider.isPhantom) {
    if (connected) {
      await provider.disconnect?.();
      alert("Wallet disconnected");
      setConnected(false);
    } else {
      try {
        // Connect wallet
        await provider.connect?.();
        alert("Wallet connected");
        setConnected(true);
        const walletAddress = provider.publicKey?.toString() || "";
        const connection = new Connection(clusterApiUrl("devnet"), "confirmed");
        const balance = await connection.getBalance(
          new PublicKey(walletAddress)
        );
        console.log(balance);
        return;
      } catch {
        alert("Could not connect wallet");
      }
    }
  } else {
    alert("Install phantom wallet extension");
  }
}
const Wallet = () => {
  const [connected, setConnected] = useState(false);
  return (
    <button
      className="wallet"
      onClick={() => connectWallet({ connected, setConnected })}
    >
      {connected ? "Disconnect" : "  Connect"}
      <img src="phantom.svg" alt="" />
    </button>
  );
};

export default Wallet;
