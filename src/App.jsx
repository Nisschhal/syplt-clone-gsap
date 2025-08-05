import gsap from "gsap"
import NavBar from "./components/NavBar"
import HeroSection from "./sections/HeroSection"
import { ScrollSmoother, ScrollTrigger } from "gsap/all"
import MessageSection from "./sections/MessageSection"
import FlavorSection from "./sections/FlavorSection"

// register ScrollTrigger
gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

function App() {
  return (
    <>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <NavBar />
          <HeroSection />
          <MessageSection />
          <FlavorSection />
          <div className="h-dvh border"></div>
        </div>
      </div>
    </>
  )
}

export default App
