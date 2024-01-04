import { useEffect } from 'react';
import { ChatBubbleLeftRightIcon, CommandLineIcon, ComputerDesktopIcon, CreditCardIcon } from '@heroicons/react/20/solid';

const products = [
  {
    id: 1,
    name: 'Web3 Solidity Contract',
    href: '',
    price: '3.50 ETH',
    imageSrc: "https://bafybeigxybbk6ywjbo2cg3k6zwyddmtlkl4way2ghddd34ceskzqfdrvi4.ipfs.nftstorage.link/solid.png",
    imageAlt: 'solid',
  },
  {
    id: 2,
    name: 'Web3 Rust Contract',
    href: '',
    price: '1.52 ETH',
    imageSrc: "https://bafybeigxybbk6ywjbo2cg3k6zwyddmtlkl4way2ghddd34ceskzqfdrvi4.ipfs.nftstorage.link/solana.png",
    imageAlt: 'dapp',
  },
  {
    id: 3,
    name: 'Web/Mobile Dapp - Simple',
    href: '',
    price: '4.04 ETH',
    imageSrc: "https://bafybeigxybbk6ywjbo2cg3k6zwyddmtlkl4way2ghddd34ceskzqfdrvi4.ipfs.nftstorage.link/dapp.png",
    imageAlt: 'combo',
  },
  {
    id: 4,
    name: 'Web/Mobile Dapp - Advanced',
    href: '',
    price: '4.22 ETH',
    imageSrc: "https://bafybeigxybbk6ywjbo2cg3k6zwyddmtlkl4way2ghddd34ceskzqfdrvi4.ipfs.nftstorage.link/advanced.png",
    imageAlt: 'web3',
  },
  {
    id: 5,
    name: 'Web2 Backend - Go/Rust/Js',
    href: '',
    price: '1.07 ETH',
    imageSrc: "https://bafybeigxybbk6ywjbo2cg3k6zwyddmtlkl4way2ghddd34ceskzqfdrvi4.ipfs.nftstorage.link/rust.png",
    imageAlt: 'web2',
  },
  {
    id: 6,
    name: 'ReactJs/ReactNative Web2 app',
    href: '',
    price: '1.25 ETH',
    imageSrc: "https://bafybeigxybbk6ywjbo2cg3k6zwyddmtlkl4way2ghddd34ceskzqfdrvi4.ipfs.nftstorage.link/two.png",
    imageAlt: 'reacapp',
  },
  {
    id: 7,
    name: 'Web/Mobile + Web2',
    href: '',
    price: '2.51 ETH',
    imageSrc: "https://bafybeigxybbk6ywjbo2cg3k6zwyddmtlkl4way2ghddd34ceskzqfdrvi4.ipfs.nftstorage.link/mobile.png",
    imageAlt: 'rjrn23',
  },
  {
    id: 8,
    name: 'Web+Mobile + Web2/Web3',
    href: '',
    price: '5.30 ETH',
    imageSrc: "https://bafybeigxybbk6ywjbo2cg3k6zwyddmtlkl4way2ghddd34ceskzqfdrvi4.ipfs.nftstorage.link/mobileweb.png",
    imageAlt: 'rjrn23',
  },
]

const serviceAttributes = [
  {
    name: 'Inquirying & Planning',
    description:
      'Send your business proposal in the contact form, and we will setup a meeting to consolidate the detail and procedure.',
    icon: ChatBubbleLeftRightIcon,
  },
  {
    name: 'UpFront Payment',
    description:
      'After we have a multure blueprint of the application, we will verify your address and you would pay half the cost of the service with designated cryptocurrencies.',
    icon: CreditCardIcon,
  },
  {
    name: 'Development',
    description:
      'We shall develop the project from scratch and with all the resources you provided. And we will update the progress with a daily or weekly email.',
    icon: CommandLineIcon,
  },
  {
    name: 'Deployment',
    description:
      'After the application was completed, we will have a review session. Once everything is settled, deployment will be proceeded and the second half of the expenditure will be met as well.',
    icon: ComputerDesktopIcon,
  },
]

function Services() {

  useEffect(() => {
    document.title = 'Services'; 
  }, [])

  return (
    <div className="px-4 py-16 mx-auto md:px-1 lg:px-4 lg:py-15 overflow-hidden">
      <div className="max-w-xl mb-5 md:mx-auto sm:text-center lg:max-w-2xl md:mb-6">
        <h2 className="max-w-lg mb-4 font-sans text-3xl font-bold 
        leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          Services
        </h2>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-violet-500">Deploy faster</h2>
          <p className="mt-2 text-3xl font-normal tracking-tight text-gray-900 sm:text-4xl">
            Everything we need to deploy your app
          </p>
          <p className="mt-4 text-base leading-6 text-gray-500">
            3Lancer provides an efficient and high-performing pipeline for building professional, 
            stylish applications for clients from different industries. 
          </p>
        </div>
        <div className="mx-auto max-w-10xl px-4 
        lg:px-6 my-5 flex justify-center 
        items-center h-3/5 w-4/5">
          <img src="https://bafybeigxybbk6ywjbo2cg3k6zwyddmtlkl4way2ghddd34ceskzqfdrvi4.ipfs.nftstorage.link/example.png" alt="" className="" />
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {serviceAttributes.map((step) => (
              <div key={step.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 
                  items-center justify-center rounded-lg bg-blue-600">
                    <step.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {step.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-700">{step.description}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Available Services</h2>
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                    </h3>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services;