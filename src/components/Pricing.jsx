import React from 'react'

const Pricing = () => {
  return (
    <section className='bg-[#183b54] mt-20 pt-11 px-[3%]'>
        <div className='flex flex-col-reverse md:flex-row max-w-[1186px] xl:mx-auto mx-[3%]'>
            <div className='text-white md:w-1/2 py-14'>
                <p className='text-3xl md:text-4xl lg:text-5xl font-semibold mb-2 text-center md:text-left'>No participants?</p>
                <p className='text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 text-center md:text-left'>No problem.</p>
                <p className='text-gray-400 text-center md:text-left text-lg md:text-xl lg:text-2xl mb-6'>Our integrated panel allows you to quickly and affordably recruit research participants that precisely match your target audience.</p>
                <p className='text-center md:text-left text-xl font-semibold mb-4'>Our panel includes:</p>
                <ul className='grid grid-cols-1 sm:grid-cols-2 text-base sm:text-lg mb-8'>
                    <li className='text-gray-400 mb-2 list-disc ml-4'>530k+ panel participants</li>
                    <li className='text-gray-400 mb-2 list-disc ml-4'>Coverage in 100+ countries</li>
                    <li className='text-gray-400 mb-2 list-disc ml-4'>35+ demographic options</li>
                    <li className='text-gray-400 mb-2 list-disc ml-4'>Average 2hr turn around time</li>
                    <li className='text-gray-400 mb-2 list-disc ml-4'>Free demographic targeting</li>
                    <li className='text-gray-400 mb-2 list-disc ml-4'>Response quality guarantee</li>
                </ul>
                <div className='text-center md:text-left flex flex-col items-center sm:block md:flex md:items-start lg:block'>
                    <button className='py-3 px-6 rounded-[4px] font-semibold text-white bg-lightblue'>Try the panel calculator</button>
                    <span className='text-gray-400 text-lg'>&nbsp;&nbsp;  or &nbsp;&nbsp; </span>
                    <button className='border border-lightblue py-3 px-6 rounded-[4px] font-semibold mb-6'>Learn More</button>
                </div>
                
            </div>
            <div className='flex bg-contain bg-no-repeat bg-center min-h-[400px] min-w-[280px] md:w-1/2 justify-center items-center z-[1]' style={{backgroundImage:'url("https://assets-global.website-files.com/5af97a9c84ec1bc79d81b5f4/5afa8ec41bc1893d6b1b14d4_homepage_panel.png")'}}>
                <div className='flex bg-contain bg-no-repeat bg-center h-40 w-52  md:h-40 md:w-40 lg:h-52 lg:w-52  items-center justify-center z-[4]' style={{backgroundImage:'url("https://assets-global.website-files.com/5af97a9c84ec1bc79d81b5f4/5afa8f68031f62ba2be19930_oval3.png")'}}>
                <div className='flex flex-col justify-center items-center '>
                    <span className='md:text-lg lg:text-xl font-semibold lg:mb-2'>Starting from</span>
                    <span className='md:text-xl lg:text-2xl text-gray-500 font-semibold lg:mb-2'>USD $<span className='md:text-2xl lg:text-3xl text-lightblue'>1</span> </span>
                    <span className='md:text-lg lg:text-xl font-semibold lg:mb-2'>per response</span>
                </div>
                </div>

            </div>
            {/* <div className='relative w-1/2 '>
                <img className='m-auto ' src="https://assets-global.website-files.com/5af97a9c84ec1bc79d81b5f4/5afa8ec41bc1893d6b1b14d4_homepage_panel.png" alt="" />
                <img className='absolute z-30 m-auto left-0 right-0 top-0 bottom-0' src="https://assets-global.website-files.com/5af97a9c84ec1bc79d81b5f4/5afa8f68031f62ba2be19930_oval3.png" alt="" />
                <div className='flex flex-col justify-center items-center absolute z-40 m-auto left-0 right-0 top-0 bottom-0'>
                    <span className='text-xl font-semibold mb-2'>Starting from</span>
                    <span className='text-2xl text-gray-500 font-semibold mb-2'>USD $<span className='text-3xl text-lightblue'>1</span> </span>
                    <span className='text-xl font-semibold mb-2'>per response</span>
                </div>
            </div> */}
        </div>

    </section>
  )
}

export default Pricing