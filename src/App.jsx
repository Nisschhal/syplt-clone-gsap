import gsap from "gsap"
import NavBar from "./components/NavBar"
import HeroSection from "./sections/HeroSection"
import { ScrollSmoother, ScrollTrigger } from "gsap/all"
import MessageSection from "./sections/MessageSection"
import FlavorSection from "./sections/FlavorSection"
import NutritionSection from "./sections/NutritionSection"

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
          <NutritionSection />
          <div className="h-screen"></div>
        </div>
      </div>
    </>
  )
}

export default App
