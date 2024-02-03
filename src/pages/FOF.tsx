import { useState, useEffect } from 'react';
import { ethers} from 'ethers';
import contractCode from "../contract/ThreeLancer.json";

export default function FOF() {
  const [provider,setProvider] = useState<ethers.providers.Web3Provider | null>(null);;
  const [network, setNetwork] = useState("");

  useEffect(() => {
    const initializeProvider = async () => {
      if (window.ethereum) {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        setProvider(provider);
        // console.log(provider);
      }
    };

    const getNetwork = async () => {
      if (provider) {
        const network = await provider.getNetwork();
        setNetwork(network.name);
        // console.log(network.name);
      }
    };

    initializeProvider();

    getNetwork();
  }, [provider]);

  return (
    <>
      <main className="grid place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8 h-screen">
        <div className="text-center">
          <p className="text-base font-semibold text-indigo-400">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Page not found</h1>
          <p className="mt-6 text-base leading-7 text-gray-800">Sorry, we couldn’t find the page you’re looking for.</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/"
              className="rounded-md bg-red-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Go back home
            </a>
          </div>
        </div>
      </main>
    </>
  )
}
  