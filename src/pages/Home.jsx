import React, {useState} from 'react'
import MobileSideBar from '../components/MobileSideBar/MobileSideBar'
import Header from '../components/Navbar/Header'
import Hero from '../components/Hero/Hero'
import ProjectCard from '../components/ProjectCard/ProjectCards'

export default function Home() {

    const [isOpen, setIsOpen] = useState(false)
    
    const toggleMenu = ()=>{
        setIsOpen(!isOpen)
    }

  return (
  <>
  <MobileSideBar isOpen={isOpen} toggleMenu={toggleMenu}/>
  <Header toggleMenu={toggleMenu}/>
  <Hero/>
  <ProjectCard/>
  </>
  )
}
