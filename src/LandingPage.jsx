import Navbar from "./Navbar"
import { Contact } from "./sections/Contact";
import { Content } from "./sections/Content"
import { HeroSection } from "./sections/HeroSection"

function LandindPage() {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <Content/>
    <Contact/>
    </>
  )
}

export default LandindPage
