import React from 'react'

const Hero = () => {
  return (
    <section className='mx-[3%] xl:mx-auto my-[35px] max-w-[1186px]'>
        <div className="flex flex-col-reverse md:flex-row items-center">
            <div className="flex flex-col md:w-5/12 items-center md:justify-center md:items-start">
                <p className='mb-4 text-5xl font-semibold text-center md:text-left'>Design confidently.</p>
                <p className='text-gray-500 text-xl mb-8 text-center md:text-left'>UsabilityHub is a remote user research platform that takes the guesswork out of design decisions by validating them with real users.</p>
                <button className='flex-initial py-3 px-6 rounded-[4px] font-semibold text-white bg-lightblue '>Get Started</button>
            </div>
            <div className='md:w-7/12 px-3 flex justify-end'>
            <img src="https://assets-global.website-files.com/5af97a9c84ec1bc79d81b5f4/61e0f3d9ef7382d9dc96150c_Meta%20Home.jpg" width="586" alt="usability testing" sizes="(max-width: 479px) 100vw, (max-width: 767px) 90vw, 54vw" srcSet="https://assets-global.website-files.com/5af97a9c84ec1bc79d81b5f4/61e0f3d9ef7382d9dc96150c_Meta%20Home-p-800.jpeg 800w, https://assets-global.website-files.com/5af97a9c84ec1bc79d81b5f4/61e0f3d9ef7382d9dc96150c_Meta%20Home.jpg 856w"/>
            </div>
        </div>
    </section>
  )
}

export default Hero