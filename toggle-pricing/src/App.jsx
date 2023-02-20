import React, { useState } from "react";
import bgBottom from "./assets/bg-bottom.svg";
import bgTop from "./assets/bg-top.svg";
function App() {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <img
        src={bgBottom}
        alt=''
        className='absolute bottom-0 max-w-[20%] sm:max-w-full'
      />
      <img
        src={bgTop}
        alt=''
        className='absolute top-0 right-0 sm:w-96  '
      />

      <main className='mx-auto mt-10 grid min-h-screen max-w-5xl items-center font-montserrat sm:mt-0'>
        <div>
          <div>
            <div className='text-center text-3xl text-[#6D708D]'>
              <h1>Our Pricing</h1>
            </div>
            <div className=' mt-9 flex justify-center space-x-9 text-[#B3B5C6]'>
              <p>Annually</p>
              {/* Toggle */}
              <label className='relative h-7 w-12 rounded-full bg-gradient-to-r from-[#A3A8F0] to-[#696FDD] hover:from-[#A3A8F0] hover:to-[#A3A8F0]'>
                <input
                  onChange={(event) => setToggle(event.target.checked)}
                  id='check'
                  type='checkbox'
                  className='peer sr-only'
                />
                <span className='absolute left-1 top-1 h-5 w-5 cursor-pointer rounded-full bg-white transition-all peer-checked:left-6 peer-checked:bg-white'></span>
              </label>

              <p>Monthly</p>
            </div>
          </div>

          {/* Card Components */}
          <section className='mt-9 grid min-w-full grid-cols-1 px-4 sm:grid-cols-3 sm:px-5'>
            {/* #1 Basic  */}
            <div className='mt-5 rounded-xl bg-white text-center drop-shadow-xl sm:mb-0 sm:rounded-tl-xl sm:rounded-bl-xl sm:rounded-tr-none sm:rounded-br-none'>
              <div>
                <p className='my-6 text-[#6D708D]'>Basic</p>
                <h1 className='mb-8 text-5xl text-[#494C5F] '>
                  {toggle ? "$19.99" : "$199.99"}
                </h1>
              </div>
              <ul className='text-[#6D708D]'>
                <li className='mx-8 border-b border-t py-4'>500 GB Storage</li>
                <li className='mx-8 border-b py-4'>2 Users Allowed</li>
                <li className='mx-8 border-b py-4'>Send up to 3 GB</li>
              </ul>
              <button className='whiteCardBtn'>LEARN MORE</button>
            </div>
            {/* #2 Professional */}
            <div className='mt-6  rounded-xl bg-gradient-to-br from-[#A3A8F0] to-[#696FDD] text-center text-white drop-shadow-xl sm:-mb-6 sm:mt-0'>
              <div>
                <p className='mb-6 mt-10'>Professional</p>
                <h1 className='mb-8 text-5xl '>
                  {toggle ? "$24.99" : "$249.99"}
                </h1>
              </div>
              <ul className=''>
                <li className='mx-8 border-b border-t py-4'>500 GB Storage</li>
                <li className='mx-8 border-b py-4'>2 Users Allowed</li>
                <li className='mx-8 border-b py-4'>Send up to 3 GB</li>
              </ul>
              <button className='purpleCardBtn'>LEARN MORE</button>
            </div>
            {/* #3 Master */}
            <div className='mb-10 mt-5 rounded-xl bg-white text-center drop-shadow-xl sm:mb-0 sm:rounded-tr-xl sm:rounded-br-xl sm:rounded-tl-none sm:rounded-bl-none'>
              <div>
                <p className='my-6 text-[#6D708D]'>Master</p>
                <h1 className='mb-8 text-5xl text-[#494C5F] '>
                  {toggle ? "$39.99" : "$399.99"}
                </h1>
              </div>
              <ul className='text-[#6D708D]'>
                <li className='mx-8 border-b border-t py-4'>2 TB Storage</li>
                <li className='mx-8 border-b py-4'>10 Users Allowed</li>
                <li className='mx-8 border-b py-4'>Send up to 20 GB</li>
              </ul>
              <button className='whiteCardBtn '>LEARN MORE</button>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default App;
