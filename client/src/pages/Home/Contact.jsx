import React from 'react'
import { SectionTitle, Button } from "../../component"
import { useSelector } from 'react-redux';

function Contact() {
    const { portfolioData } = useSelector((state)=>state.root)
    const {contact} = portfolioData;
    
    return (
        <div className='px-24 sm:px-6 lg:px-12 sm:flex-col '>
            <SectionTitle title={"Hello"} />
            <article className='flex flex-wrap justify-evenly md:justify-center sm:flex-col sm:text-sm'>

                <section className='py-20 px-20 sm:px-2  text-tertiary'>
                    <div >{'\{'}</div>
                    {Object.keys(contact).filter((key)=>{
                        return key!=='_id'
                    }).map((item)=>{
                        return <div className='px-9'>{item} :{'\"'} {contact[item]} {'\"'}</div>
                    })
                    
                    }
                  
                    <div>{'\}'}</div>
                </section>
                <section className=''>
                    <script src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs" type="module"></script>

                    <dotlottie-player src="https://lottie.host/b44c6628-0c36-459e-8433-5444d27fac6a/zu5utRNmOw.json" background="transparent" speed="1" style={{width: "300px", height: "300px"}} loop autoplay></dotlottie-player>
                </section>
            </article>
        </div>
    )
}

export default Contact