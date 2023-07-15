import React from 'react'

const data = [
    {
        index:1,
        text:"Can users complete a task in my software interface?",
        img:"https://assets-global.website-files.com/5b29b478056829d173e3e394/5b48591a238eb6563b4d3581_cover_tasks.jpg"
    },
    {
        index:2,
        text:"Can users find important pages on my website?",
        img:"https://assets-global.website-files.com/5b29b478056829d173e3e394/5b48581f238eb652d84d356f_cover_navigate.jpg"
    },
    {
        index:3,
        text:"Is my website’s intended audience clear? ",
        img:"https://assets-global.website-files.com/5b29b478056829d173e3e394/5b485751238eb68a594d3555_cover_audience.jpg"
    },
    {
        index:4,
        text:"Do visitors understand what a page is about?",
        img:"https://assets-global.website-files.com/5b29b478056829d173e3e394/5b48587a238eb690dd4d3577_cover_about.jpg"
    },
]

const Examples = () => {
  return (
    <section className='max-w-[1186px] xl:mx-auto mx-[3%]'>
        <div className="flex flex-col items-center ">
            <p className='mb-4 text-[28px] sm:text-[34px] md:text-4xl font-semibold text-center'>One platform, endless possibilities</p>
            <button className='border border-lightblue py-3 px-6 rounded-[4px] font-semibold mb-6'>See More Examples</button>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mx-30px'>
                {
                    data.map((item)=>{
                        return(
                            <div key={item.index} className="min-h-[250px] bg-cover bg-no-repeat flex flex-col justify-end p-4 rounded-md drop-shadow-md hover:scale-105 transition-all ease-in-out duration-500 cursor-pointer" style={{backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.8)),url("${item.img}")`}}>
                                <p className='text-white font-semibold text-2xl'>{item.text}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>

    </section>
  )
}

export default Examples