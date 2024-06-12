import React, { useState } from 'react'
import SectionTitle from '../../component/SectionTitle'
import { useSelector } from 'react-redux';

function Experience() {
    const {loading, portfolioData } = useSelector((state)=>state.root)
    const {experiences} = portfolioData;
    const [selected, useSelected]= useState(0)
  return (
    <div className='px-24 sm:px-6 lg:px-12'>
        
        <SectionTitle title={"Experience"}/>
        
        <div className="flex flex-wrap justify-between py-20 " >
            
            <div className='flex flex-col w-1/3 sm:w-full sm:flex-row gap-5 border-l-2 border-[#FFBB0060] sm:overflow-x-scroll'>

                {experiences.map((experience , index)=>(
                    <div className=''>
                        <h1 key={experience.id} onClick={()=>useSelected(index)} className={`text-xl ${selected === index ? "text-tertiary border-l-4 bg-opacity-20  bg-tertiary border-tertiary " : "text-white"} hover:cursor-pointer sm:w-28 sm:text-sm px-4 p-2`}>{experience.period}</h1>
                    </div>
                ))}
            </div>

            <div className='px-12 w-2/3 sm:w-full  sm:px-0 sm:py-12  text-justify '>
                <div>{experiences.map((experience, index)=>(
                    <div>
                        {selected === index ? 
                        <div>
                            <h1 className='py-3 text-2xl sm:text-xl text-tertiary'>{experience.title}</h1>
                            <h1 className='py-3 sm:text-xl text-2xl text-secondary '>{experience.company}</h1>
                            <h1 className='py-3 sm:text-lg text-xl '>{experience.description}</h1>
                        </div>
                        : ""}
                    </div>
                ))}</div>
            </div>
        </div>
    </div>
  )
}

export default Experience