import React from 'react'
import Header from '../../component/Header'
import Intro from './Intro'
import About from './About'
import Experience from './Experience'
import Projects from './Projects'
import Blogs from './Blogs'
import Contact from './Contact'
import Footer from './Footer'
import LeftSider from './LeftSider'
import { useSelector } from 'react-redux'
function Home() {
  const { portfolioData } = useSelector((state) => state.root)
  return (

    <div className=' bg-primary flex flex-col gap-y-9'>
      <Header />
      {portfolioData && (
      <div>
        <Intro />
        <About />
        <Experience />
        <Projects />
        <Blogs />
        <Contact />
        <Footer />
        <LeftSider />
      </div>)}
    </div>
  )
}

export default Home