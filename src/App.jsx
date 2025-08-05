import gsap from "gsap"
import NavBar from "./components/NavBar"
import HeroSection from "./sections/HeroSection"
import { ScrollTrigger } from "gsap/all"
import MessageSection from "./sections/MessageSection"

// register ScrollTrigger
gsap.registerPlugin(ScrollTrigger)

function App() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <MessageSection />
      <div className="h-dvh"></div>
    </>
  )
}

export default App
