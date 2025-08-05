import gsap from "gsap"
import NavBar from "./components/NavBar"
import HeroSection from "./sections/HeroSection"
import { ScrollTrigger } from "gsap/all"
import MessageSection from "./sections/MessageSection"
import FlavorSection from "./sections/FlavorSection"

// register ScrollTrigger
gsap.registerPlugin(ScrollTrigger)

function App() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <MessageSection />
      <FlavorSection />
      <div className="h-dvh border"></div>
    </>
  )
}

export default App
