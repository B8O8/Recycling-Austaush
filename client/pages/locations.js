import { useState } from "react";
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import bg from '../images/bg.png';




export default function locations() {
    const [navbar, setNavbar] = useState(false);

    return(
        <div>
            <Head>
        <title>Locations</title>
        <meta
          name="description"
          content="Locations"
        />
        <link rel="smicon" href="/images/smicon.ico" />
      </Head>
            <nav className="w-full bg-green shadow">
        <div className="justify-center px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <Image className=' h-22 w-20' src={bg} />
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">

              <a href="/">
                <h2 className=" pr-20 text-2xl text-white font-bold">Recycling Austaush</h2>
              </a>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? 'block' : 'hidden'}`}
            >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                <li className="text-white">
                  <Link href="/">
                    Home
                  </Link>
                </li>
                <li className="text-white">
                  <Link href="/posts">
                    Posts
                  </Link>
                </li>
                <li className="text-white">
                  <Link href="/locations">
                    Locations
                  </Link>
                </li>
                <li className="text-white">
                  <Link href="/aboutUs">
                    About US
                  </Link>
                </li>
                <li className="text-white">
                  <Link href="/contact">
                    Contact US
                  </Link>
                </li>
                <li className="text-black">
                  <Link href="/login">
                    Login
                  </Link>
                </li>
                <li className="text-black">
                  <Link href="/register">
                    Register
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
        
        <div class="justify-center px-6 mx-auto font-mysans text-2xl my-3">
            <h2 className="text-center my-2">Ganatch</h2>
            <iframe class="gmap_iframe" width="100%" height="400rem" frameborder="0"  marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=1961&amp;height=400&amp;hl=en&amp;q=ganatch&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
        </div>
        
        <div class="justify-center px-6 mx-auto font-mysans text-2xl my-3">
            <h2 className="text-center my-2">Global Recycling and Waste Management Corporation</h2>
            <iframe class="gmap_iframe" width="100%" height="400rem" frameborder="0"  marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=1961&amp;height=400&amp;hl=en&amp;q=Global Recycling and Waste Management Corporation&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
        </div>

        <div class="justify-center px-6 mx-auto font-mysans text-2xl my-3">
            <h2 className="text-center my-2">We Recycle SAL</h2>
            <iframe class="gmap_iframe" width="100%" height="400rem" frameborder="0"  marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=1961&amp;height=400&amp;hl=en&amp;q=We Recycle SAL&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
        </div>

        <div class="justify-center px-6 mx-auto font-mysans text-2xl my-3">
            <h2 className="text-center my-2">Drop-Off Tabarja</h2>
            <iframe class="gmap_iframe" width="100%" height="400rem" frameborder="0"  marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=1961&amp;height=400&amp;hl=en&amp;q=Drop-Off Tabarja&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
        </div>

        <div class="justify-center px-6 mx-auto font-mysans text-2xl my-3">
            <h2 className="text-center my-2">Live Love Recycle</h2>
            <iframe class="gmap_iframe" width="100%" height="400rem" frameborder="0" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=1961&amp;height=400&amp;hl=en&amp;q=Live Love Recycle&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
        </div>

        </div>
    )


}