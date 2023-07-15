import React from 'react'

const data = [
    {
        index: 1,
        headingOne :"Effortless validation for",
        headingTwo :"Design professionals",
        desc :"Test interfaces, interaction flows, iconography and more, to help you create intuitive and delightful experiences for your users.",
        logo :"https://assets-global.website-files.com/5af97a9c84ec1bc79d81b5f4/5b48038d33b04e2c4746784b_logo_chartmogul.png",
        quote :"The navigation test is god's gift to UI designers, it probably has the best power-to-simplicity ratio of any software, ever.",
        avatar :"https://assets-global.website-files.com/5af97a9c84ec1bc79d81b5f4/5b47fffe8d2f84bbe2f2d3c9_avatar_nick.png",
        name :"Nick Franklin",
        designation :"Chief Executive Officer",
        img :"https://assets-global.website-files.com/5af97a9c84ec1bc79d81b5f4/5b44330a05b1ce09edcc052e_home_designer.png"
    },
    {
        index: 2,
        headingOne:"Optimisation for",
        headingTwo:"Marketers",
        desc:"Fine-tune landing pages, messaging, and creative, helping you optimise conversion rates on marketing campaigns and product launches.",
        logo:"https://assets-global.website-files.com/5af97a9c84ec1bc79d81b5f4/5b46eb27731aa104bfa613ab_logo_philips.png",
        quote:"We use UsabilityHub tests to help us make decisions for various projects. From web and mobile design to marketing activities.",
        avatar:"https://assets-global.website-files.com/5af97a9c84ec1bc79d81b5f4/5b47fffec57559f4aad75acd_avatar_rick.png",
        name:"Rick van de Ven",
        designation:"Digital Marketing Analyst",
        img:"https://assets-global.website-files.com/5af97a9c84ec1bc79d81b5f4/5b44330a6c5dba54a973c215_home_marketer.png"
    },
    {
        index: 3,
        headingOne:"Easier decision making for",
        headingTwo:"Product managers",
        desc:"Ensure you’re delivering the right features to the right customers by validating product concepts with your target audience.",
        logo:"https://assets-global.website-files.com/5af97a9c84ec1bc79d81b5f4/5b46f218731aa104eea61880_logo_economist.png",
        quote:"Adopting UsabilityHub got us into the habit of asking our users questions before locking in decisions.",
        avatar:"https://assets-global.website-files.com/5af97a9c84ec1bc79d81b5f4/5b47ffff33b04ea98d467523_avatar_ron.png",
        name:"Ron Diorio",
        designation:"VP Innovation & New Products",
        img:"https://assets-global.website-files.com/5af97a9c84ec1bc79d81b5f4/5b44330a049e86cae8ae66e5_home_manager.png"
    },
]

const Testimonials = () => {
  return (
    <section className='max-w-[1186px] xl:mx-auto mx-[3%] mb-[3%] mt-[100px]'>
        <div className=''>
            {data.map((item)=>{
                return(
                <div key={item.index.toString()} className={`flex flex-col justify-between ${item.index%2===0?"md:flex-row-reverse":"md:flex-row"}`}>
                    <div className='w-full md:w-1/2 my-auto '>
                        <img className='' src={item.img} alt="" />
                    </div>
                    <div className='w-full md:w-1/2 p-10 pr-14'>
                        <p className='font-semibold text-lg md:text-base lg:text-lg mb-2'>{item.headingOne}</p>
                        <p className='font-semibold text-3xl md:text-2xl lg:text-3xl mb-4'>{item.headingTwo}</p>
                        <p className='text-gray-500 text-xl md:text-lg lg:text-xl mb-4'>{item.desc}</p>
                        <img className='h-8 mb-8' src={item.logo} alt="" />
                        <p className='font-semibold before:content-[url(https://assets-global.website-files.com/5af97a9c84ec1bc79d81b5f4/5af9a44aa9b84e59b0b95121_quote.svg)] before:absolute before:-z-10 before:-left-6 before:-top-4 mt-3   relative text-lg lg:pr-[100px]'>{item.quote}</p>
                        <div className='flex mt-4'>
                            <img className='w-14' src={item.avatar} alt="" />
                            <div className='ml-4 flex justify-center flex-col '>
                                <p className='font-semibold'>{item.name}</p>
                                <span className='text-sm text-gray-500'>{item.designation}</span>
                            </div>
                        </div>
                    </div>
                </div>
                )
            })}
        </div>
    </section>
  )
}

export default Testimonials