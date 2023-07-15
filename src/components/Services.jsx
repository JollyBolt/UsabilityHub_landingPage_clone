import React from 'react'

const service = [
    {
        logo:"https://assets-global.website-files.com/5af97a9c84ec1bc79d81b5f4/6355e6254d0d41e7d3aa16c0_card-sorting.svg",
        heading:"Card Sorting",
        desc:"Discover how people group and label information."
    },
    {
        logo:"https://assets-global.website-files.com/5af97a9c84ec1bc79d81b5f4/619f1c2ab5d65ddab8ae52db_prototype-testing.svg",
        heading:"Prototype Tests",
        desc:"Discover how people navigate your Figma prototypes."
    },
    {
        logo:"https://assets-global.website-files.com/6101f41d07abfab7b5f57c84/6101f41d07abfa81f8f57cde_click-analysis.svg",
        heading:"First Click Tests",
        desc:"Test interaction with first click and navigation tests."
    },
    {
        logo:"https://assets-global.website-files.com/6101f41d07abfab7b5f57c84/6101f41d07abfa567af57cc3_surveys.svg",
        heading:"Design Surveys",
        desc:"Get feedback on images, videos or audio files."
    },
    {
        logo:"https://assets-global.website-files.com/6101f41d07abfab7b5f57c84/6101f41d07abfa0fd5f57cd6_Head%20icon.svg",
        heading:"Preferencs Tests",
        desc:"Find out which designs users prefer and why."
    },
    {
        logo:"https://assets-global.website-files.com/6101f41d07abfab7b5f57c84/6101f41d07abfaefeaf57cd8_five-second-test.svg",
        heading:"Five Second Tests",
        desc:"Test comprehensibility by measuring first impressions."
    }
]

const Services = () => {
  return (
    <section className='lg:max-w-[1186px] lg:mx-auto mt-[60px] mb-[75px]'>
        <img className='-z-10 absolute left-0 right-0 m-auto w-7/12 hidden lg:block' src="https://assets-global.website-files.com/5af97a9c84ec1bc79d81b5f4/5af98b9f779b5a7d0a80351e_Oval%201.svg" alt="" />
        <div className='flex flex-col justify-center items-center pt-[40px]'>
            <p className='font-semibold text-3xl mb-[15px] text-center'>Your user research Swiss Army knife</p>
            <button className='border border-lightblue py-3 px-6 rounded-[4px] font-semibold'>See all features</button>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mx-[3%]'>
            {
                service.map((item)=>{
                    return(
                        <div key={item.heading} className='flex flex-col justify-center items-center p-2 mt-10'>
                            <img className='w-12 mb-4' src={item.logo} alt="" />
                            <p className='font-semibold text-2xl mb-2 text-center'>{item.heading}</p>
                            <p className='text-xl font-medium text-center mb-3'>{item.desc}</p>
                            <button className='border border-lightblue py-3 px-6 rounded-[4px] font-semibold'>Learn More</button>
                        </div>
                    )
                })
            }

        </div>
        

    </section>
  )
}

export default Services