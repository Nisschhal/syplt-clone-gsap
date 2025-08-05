import gsap from "gsap"
import NavBar from "./components/NavBar"
import HeroSection from "./sections/HeroSection"
import { ScrollTrigger } from "gsap/all"

// register ScrollTrigger
gsap.registerPlugin(ScrollTrigger)

function App() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <div className="h-dvh border"> </div>
    </>
  )
}

export default App
