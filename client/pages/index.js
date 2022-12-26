import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import bg from '../images/bg.png';

export default function Home() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <Head>
        <title>Recycling</title>
        <meta
          name="description"
          content="Recycling"
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

                {/* if(status === 'success')
                {
                  '#login'
                } */}

                <li id='login' className="text-black">
                  <Link href="/login">
                    Login
                  </Link>
                </li>
                <li id='register' className="text-black">
                  <Link href="/register">
                    Register
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
       
      </nav>
      {/* <div id="toaster" className={`bg-beige flex justify-center p-4`} role="alert">
    <h1 className="p-3 rounded-full bg-green pl-4 text-sm font-normal">You are logged in successfully.</h1>
</div> */}
      
      <div className="justify-center px-6 mx-auto bg-beige font-mysans text-lg"> 
        <div className="recaycle">
            <p className="text-center mb-3 pt-5 font-mysans text-2xl">
            <strong>What is Recycling?</strong>
            </p>
        </div>
        <div className="process my-2">
        <p className="rec1 mb-3">Recycling is the process of converting waste materials, that would usually be thrown away, into new materials and objects. Recycling waste reduces the number of harmful materials produced and reduces energy usage, therefore benefitting the environment.</p>
        </div>

        <div className="recaycle my-2">
            <p className="text-center mb-3 font-mysans text-2xl">
            <strong>What are Recyclable Materials?</strong>
            </p>
        </div>
        <div className="process">
        <p className="rc1">  Not all materials can be recycled, but there are plenty of materials that can and should be recycled. Recyclable materials include:</p>
        </div>
         <div >
            <ul className="list-disc ml-20 my-2">
                <li>Plastic</li>
                <li>Paper</li>
                <li>Cardboard</li>
                <li>Cans</li>
                <li>Batteries</li>
                <li>Glass</li>
                <li>Clothes</li>
                <li>Electronics</li>
                <li>Wood</li>
                <li>Metal</li>
            </ul>
            <p className="process">If you are unsure about whether you can recycle something or not, there is usually information on the packaging, or your local council should be able to let you know.</p>
         </div>

         <div className="recaycle my-2 ">
            <p className="text-center mb-3 font-mysans text-2xl">
            <strong> Why Should We Recycle? </strong>
            </p>
        </div>
        <div className="process">
            <p className="rec1">
            Now you know a bit more about recycling, you might be wondering, 'why should we recycle?'. <br></br>There are lots of great reasons as to why we should recycle, including:
            </p>
        </div>

          <div className="process">
            <ul className="list-disc ml-20 my-2">
                <li>Recycling conserves resources - when we recycle our waste, it is turned into new things! This means that we don't have to use up more and more natural resources making new products. Instead, we can use old, recycled materials to create new products. A lot of water bottles are recycled, and you can even get notebooks made from old tires!</li>
                <li>Recycling saves energy - using recycled materials in the manufacturing process takes up a lot less energy than it does to use newly sourced materials</li>
                <li>Recycling helps to protect the environment - recycling means we don't have to gather new, raw materials, which causes water and air pollution. Recycling also saves energy, which means it also reduces greenhouse gas emissions, which helps to combat climate change.</li>
                <li>Recycling reduces landfill - everything you don't recycle will end up in a landfill. Some materials can take hundreds, if not thousands, of years to decompose. The more we recycle, the less material ends up in landfill.</li>
                <li>Recycling can reduce your carbon footprint - everything we do on this planet leaves a trace. Recycling can help to reduce the amount of damage we all do to the environment. </li>
                
            </ul></div>

        <div className="recaycle my-2 ">
            <p className="text-center mb-3 font-mysans text-2xl">
            <strong>Recycling Facts</strong>
            </p>
        </div>
         
         <div className="process">
            <ul className="list-disc ml-20 my-2">
                <li>In the UK, we recycle around 80% of paper.</li>
                <li>Paper is one of the most recycled materials</li>
                <li>It only takes six days to turn old books, newspapers, and magazines into new ones</li>
                <li>55% of plastic waste ends up in landfills and the ocean.</li>
                <li>Not all plastics can be recycled, but many can. </li>
                <li>Glass is 100% recyclable. </li>
                <li>Once in landfill, food waste can release methane, a greenhouse gas </li>
                <li>Enough plastic is thrown away each year to circle the earth four times.</li>
            </ul></div>

        <div className="recaycle my-2">
            <p className="text-center mb-3 font-mysans text-2xl">
            <strong>Teaching Children the Importance of Recycling</strong>
            </p>
        </div>
        
         <div className="process">
             <p className="rec1">
                As soon as children are old enough to begin tidying away their own spaces, or helping the teacher or parent to clean up,<br></br> they should be informed about recycling
             </p>
        
        <br></br>
        <p className="rec1">
            Recycling is the process of collecting and re-using materials that we would usually have thrown away with the rest of our rubbish. By recycling, we can minimise the number of harmful pollutants in the atmosphere by making sure these materials are kept away from landfills, which produce a lot of greenhouse gases.
        </p>
         </div>

         <div className="recaycle my-2">
            <p className="text-center mb-3 font-mysans text-2xl">
            <strong>The main things that we recycle are:</strong>
            </p>
        </div>

       <div className="process">
            <ul className="list-disc ml-20 my-2">
                <li>Paper and card</li>
                <li>Glass</li>
                <li>Plastic</li>
                <li>Metals such as aluminium and steel.</li>
            
            </ul>
        </div>
        
        <div className="process">
         <p className="rec1">
            You can also help minimise the amount of food waste that ends up in landfills by composting fruits, vegetables and any other dead plants.
         </p>
         </div>
         <div className='my-5 mb-3 items-center'>
          <strong><p className='text-center font-mysans text-2xl my-5'>Preffer a video?</p></strong>
         <iframe  width="1450" height="600" src="https://www.youtube.com/embed/71DmyhloazQ"
          title="Recycling | Why is Recycling Important? | Learn about Recycling | Recycle Process |  Video for Kids" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen></iframe>
         </div>

        </div>
    </div>
  );

}

