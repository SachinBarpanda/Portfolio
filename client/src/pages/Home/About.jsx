import React from 'react'
import SectionTitle from '../../component/SectionTitle'
import { useSelector } from 'react-redux';

function About() {
    // const skills = [
    //     "Javascript",
    //     "React",
    //     "Node",
    //     "Express",
    //     "MongoDB",
    //     "AppWrite",
    //     "Data Structure Algorithms"
    // ]

    const { loading, portfolioData } = useSelector((state) => state.root)
    const { about } = portfolioData;
    const { skills, imageURL, descriptionTop, descriptionBottom } = about
    // speed="1" playMode="normal" loop autoplay
    return (
        <div className='px-24 sm:px-6 lg:px-12 '>
            <SectionTitle title={"About"} />
            <div className='flex sm:flex-col sm:py-3 items-center py-12'>
                <div className='h-[45vh] w-1/2'>
                    <dotlottie-player className="w-1/2" src={imageURL} ></dotlottie-player>
                </div>
                <div className='flex flex-col gap-5 w-1/2 sm:w-full text-2xl sm:text-lg lg:text-lg'>
                    <p>
                        {descriptionTop || ''}
                    </p>
                    <p>
                        {descriptionBottom || ''}            </p>
                </div>
            </div>
            <div className=' text-xl sm:text-lg lg:text-lg'>
                <h1 className='text-tertiary '>
                    Here are a few technologies I've been working on recently :
                </h1>
                <div className='flex flex-wrap gap-6 py-9 '>
                    {skills.map((item) => (
                        <div key={Math.random()} className='border-2 px-6 py-2 sm:px-3 sm:py-1 text-white border-tertiary rounded-lg hover:bg-tertiary'>
                            <h1>{item}</h1>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default About