import React from 'react'

const companies = [
    {
        name:"amazon",
        img:"https://assets-global.website-files.com/5af97a9c84ec1bc79d81b5f4/5b46e726a0fccf7d78d81585_logo_amazon.png"
    },
    {
        name:"google",
        img:"https://assets-global.website-files.com/5af97a9c84ec1bc79d81b5f4/5b46e8e6b998def81a004629_logo_google.png"
    },
    {
        name:"taskrabbit",
        img:"https://assets-global.website-files.com/5af97a9c84ec1bc79d81b5f4/5b46e8e6a0fccf20fed815e3_logo_taskrabbit.png"
    },
    {
        name:"airtable",
        img:"https://assets-global.website-files.com/5af97a9c84ec1bc79d81b5f4/5b46e8e6ee75f135fc390ab6_logo_airtable.png"
    },
    {
        name:"box",
        img:"https://assets-global.website-files.com/5af97a9c84ec1bc79d81b5f4/5b46e726c3102cf1ebf0c2c0_logo_box.png"
    },
    {
        name:"godaddy",
        img:"https://assets-global.website-files.com/5af97a9c84ec1bc79d81b5f4/5f7fda34692422757a1b3768_godaddy.svg"
    },
    {
        name:"asana",
        img:"https://assets-global.website-files.com/5af97a9c84ec1bc79d81b5f4/5b46e726a09814d84e5a21c2_logo_asana.png"
    }
]

const Partners = () => {
  return (
    <section className='max-w-[1186px] xl:mx-auto mx-[3%] mt-[50px]'>
        <p className='text-center font-semibold text-xl'>The world’s best companies rely on UsabilityHub to make better design decisions.</p>
        <div className='flex flex-wrap justify-around py-[30px]'>
            {companies.map((comp)=>{
                return(
                    <li key={comp.name} className='list-none'>
                        <img  className='h-12' src={comp.img}/>
                    </li>
                )
            })}
        </div>
    </section>
  )
}

export default Partners