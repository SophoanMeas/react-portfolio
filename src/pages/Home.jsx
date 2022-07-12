import React, {useState} from 'react'
import MobileSideBar from '../components/MobileSideBar/MobileSideBar'
import Header from '../components/Navbar/Header'
import Hero from '../components/Hero/Hero'
import ProjectCard from '../components/Profile/ProjectCards'
import Footer from '../components/Footer/Footer'
import { Routes, Route } from "react-router-dom";
import ContactPage from './ContactPage'
import styled
 from 'styled-components'
export default function Home() {

    const [isOpen, setIsOpen] = useState(false)
    
    const toggleMenu = ()=>{
        setIsOpen(!isOpen)
    }

  return (
  <>
  <MobileSideBar isOpen={isOpen} toggleMenu={toggleMenu}/>
  <Header toggleMenu={toggleMenu}/>
  <Routes>
  <Route path="/home" element={<Hero/>}/>
  <Route path="/profile" element={<ProjectCard/>}/>
  <Route path="/contact" element={<ContactPage/>}/>
  </Routes>
  <ProjectContainer/>
  <Footer/>
  </>
  )
}

const ProjectContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #000000;
    height: 40vh;
  `