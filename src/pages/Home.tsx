import { useEffect } from 'react';
// import "./Home.css";

function Home() {

  useEffect(() => {
    document.title = 'Home - 3Lancer';
  }, []);

  return (
    <div className="md:max-w-screen-xl px-4 py-16 mx-auto sm:max-w-screen-xl lg:max-w-screen-xl md:px-20 lg:px-4 lg:py-15">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center mx-4">
        <h2 className="max-w-lg mb-6 font-sans text-3xl 
        font-bold leading-none tracking-normal text-gray-900 
        sm:text-4xl md:mx-auto sm:mx-auto lg:mx-auto">
          <span className="relative inline-block">
            Welcome to 3Lancer!
          </span>
        </h2>
        <p className="text-base text-gray-700 md:text-lg font-semibold">
           You can always find the best software service nowhere but here
        </p>
      </div>
      <div className="relative overflow-hidden bg-white">
        <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              3Lancer - Expert in Web2 and Web3 application development
              </h1>
              <p className="mt-4 text-xl text-gray-500">
              From now to Q1 2024, we are going to offer a discount to each and every one of our 
                  coding service, at least 5% off. Should you find the need to outstand your competitors, a top-notch application 
                  from 3Lancer is what you can't go out without! 
              </p>
            </div>
            <div>
              <div className="mt-10">
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                          <img src="https://bafybeigxybbk6ywjbo2cg3k6zwyddmtlkl4way2ghddd34ceskzqfdrvi4.ipfs.nftstorage.link/yolo.png" alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img src="https://bafybeigxybbk6ywjbo2cg3k6zwyddmtlkl4way2ghddd34ceskzqfdrvi4.ipfs.nftstorage.link/obj.png" alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img src="https://bafybeigxybbk6ywjbo2cg3k6zwyddmtlkl4way2ghddd34ceskzqfdrvi4.ipfs.nftstorage.link/blender.png" alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img src="https://bafybeigxybbk6ywjbo2cg3k6zwyddmtlkl4way2ghddd34ceskzqfdrvi4.ipfs.nftstorage.link/react.png" alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://bafybeigxybbk6ywjbo2cg3k6zwyddmtlkl4way2ghddd34ceskzqfdrvi4.ipfs.nftstorage.link/ai.png"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img src="https://bafybeigxybbk6ywjbo2cg3k6zwyddmtlkl4way2ghddd34ceskzqfdrvi4.ipfs.nftstorage.link/nftart.png" alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img src="https://bafybeigxybbk6ywjbo2cg3k6zwyddmtlkl4way2ghddd34ceskzqfdrvi4.ipfs.nftstorage.link/gocode.png" alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  href="/services"
                  className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
                >
                  Browse Services
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-xl mb-10 mt-8 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h4 className="max-w-lg mb-8 font-sans text-3xl font-semibold 
        leading-none tracking-wide text-cyan-600 sm:text-4lg md:mx-auto">
          <span className="relative inline-block">
            Past Projects
          </span>
        </h4>
        <div className='grid grid-rows-4 grid-flow-col gap-10'>
          <div>
            <h6 className="max-w-lg mb-4 font-sans text-2lg font-medium 
              leading-none tracking-tighter 
              text-pink-600 sm:text-3base md:mx-auto">
              Gin Gonic Book - Golang Api
            </h6>
            <div className="relative overflow-hidden rounded-lg">
              <img src="https://bafybeigxybbk6ywjbo2cg3k6zwyddmtlkl4way2ghddd34ceskzqfdrvi4.ipfs.nftstorage.link/gin.png" className="object-cover w-full h-48" alt="img" />
            </div>
          </div>
          <div>
            <h6 className="max-w-lg mb-4 font-sans text-2lg font-medium 
              leading-none tracking-tighter 
              text-pink-600 sm:text-3base md:mx-auto">
              Cybersecurity Recon - Go Tools
            </h6>
            <div className="relative overflow-hidden rounded-lg">
              <img src="https://bafybeigxybbk6ywjbo2cg3k6zwyddmtlkl4way2ghddd34ceskzqfdrvi4.ipfs.nftstorage.link/recon.jpg" className="object-cover w-full h-48" alt="img" />
            </div>
          </div>
          <div>
            <h6 className="max-w-lg mb-4 font-sans text-2lg font-medium 
              leading-none tracking-tighter 
              text-pink-600 sm:text-3base md:mx-auto">
              Clout Automation - Python Fabric
            </h6>
            <div className="relative overflow-hidden rounded-lg">
              <img src="https://bafybeigxybbk6ywjbo2cg3k6zwyddmtlkl4way2ghddd34ceskzqfdrvi4.ipfs.nftstorage.link/automation.jpeg" className="object-cover w-full h-48" alt="img" />
            </div>
          </div>
          <div>
            <h6 className="max-w-lg mb-4 font-sans text-2lg font-medium 
              leading-none tracking-tighter 
              text-pink-600 sm:text-3base md:mx-auto">
              Stock Prediction - Python Keras
            </h6>
            <div className="relative overflow-hidden rounded-lg">
              <img src="https://bafybeigxybbk6ywjbo2cg3k6zwyddmtlkl4way2ghddd34ceskzqfdrvi4.ipfs.nftstorage.link/stock.png" className="object-cover w-full h-48" alt="img" />
            </div>
          </div>
          <div>
            <h6 className="max-w-lg mb-4 font-sans text-2lg font-medium 
              leading-none tracking-tighter 
              text-pink-600 sm:text-3base md:mx-auto">
              NFT Generator - Golang
            </h6>
            <div className="relative overflow-hidden rounded-lg">
              <img src="https://bafybeigxybbk6ywjbo2cg3k6zwyddmtlkl4way2ghddd34ceskzqfdrvi4.ipfs.nftstorage.link/nft.png" className="object-cover w-full h-48" alt="img" />
            </div>
          </div>
          <div>
            <h6 className="max-w-lg mb-4 font-sans text-2lg font-medium 
              leading-none tracking-tighter 
              text-pink-600 sm:text-3base md:mx-auto">
              Web3 Restaurant - Solidity
            </h6>
            <div className="relative overflow-hidden rounded-lg">
              <img src="https://bafybeigxybbk6ywjbo2cg3k6zwyddmtlkl4way2ghddd34ceskzqfdrvi4.ipfs.nftstorage.link/web3.jpg" className="object-cover w-full h-48" alt="img" />
            </div>
          </div>
          <div>
            <h6 className="max-w-lg mb-4 font-sans text-2lg font-medium 
              leading-none tracking-tighter 
              text-pink-600 sm:text-3base md:mx-auto">
              Content to Earn Dapp - Near Protocol
            </h6>
            <div className="relative overflow-hidden rounded-lg">
              <img src="https://bafybeigxybbk6ywjbo2cg3k6zwyddmtlkl4way2ghddd34ceskzqfdrvi4.ipfs.nftstorage.link/near.png" className="object-cover w-full h-48" alt="img" />
            </div>
          </div>
          <div>
            <h6 className="max-w-lg mb-4 font-sans text-2lg font-medium 
              leading-none tracking-tighter 
              text-pink-600 sm:text-3base md:mx-auto">
              E-sport Mobile - React Native
            </h6>
            <div className="relative overflow-hidden rounded-lg">
              <img src="https://bafybeigxybbk6ywjbo2cg3k6zwyddmtlkl4way2ghddd34ceskzqfdrvi4.ipfs.nftstorage.link/esport.jpeg" className="object-cover w-full h-48" alt="img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home