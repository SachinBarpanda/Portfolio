import React, { useState } from 'react'
import {SectionTitle,Button} from "../../component"
import { useSelector } from 'react-redux';

function Blogs() {
    const {loading, portfolioData } = useSelector((state)=>state.root)
    const {blogs} = portfolioData;
    const [selected, useSelected]= useState(0)
   
  return (
    <div className='px-24 sm:px-6 lg:px-12'>
        
    <SectionTitle title={"Blogs"}/>
    
    <div className="flex flex-wrap justify-between py-20 " >
        
        <div className='flex w-1/3 sm:w-full flex-col sm:flex-row gap-5 border-l-2 border-[#FFBB0060] sm:overflow-x-scroll'>

            {blogs.map((blog , index)=>(
                <div className=''>
                    <h1 key={blog.id} onClick={()=>useSelected(index)} className={`text-xl ${selected === index ? "text-tertiary border-l-4 bg-opacity-20  bg-tertiary border-tertiary " : "text-white"} hover:cursor-pointer sm:w-28 sm:text-sm px-4 p-2 `}>{blog.title}</h1>
                </div>
            ))}
        </div>

        <div className='px-12 w-2/3 sm:w-full  sm:px-0 sm:py-12  text-justify '>
            <div>{blogs.map((blog, index)=>(
                <div>
                    {selected === index ? 
                    <div>
                        <h1 className='py-3 text-2xl sm:text-xl text-tertiary'>{blog.title}</h1>
                        <img src = {blog.image} alt={blog.image}/>
                        <h1 className='py-3 sm:text-xl text-2xl text-secondary '>{blog.intro}</h1>
                        <div className='flex justify-between'>
                            <Button btnText={"See Blog"}/>
                            
                        </div>
                    </div>
                    : ""}
                </div>
            ))}</div>
        </div>
    </div>
    </div>
  )
}

export default Blogs