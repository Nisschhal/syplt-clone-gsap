import { useGSAP } from "@gsap/react"
import { flavorlists } from "../constants"
import gsap from "gsap"
import { useRef } from "react"
import { useMediaQuery } from "react-responsive"
const FlavorSlider = () => {
  const sliderRef = useRef()
  // Check if tablet mode so that the slider is not enabled
  const isTablet = useMediaQuery({
    query: "(max-width: 1023px)",
  })

  useGSAP(() => {
    // full width of the slider
    const scrollAmount =
      sliderRef.current.scrollWidth - window.innerWidth + 1200

    if (!isTablet) {
      // 1200 is added to ensure the slider has enough space to scroll to the end
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".flavor-section",
          start: "2% top",
          end: `+=${scrollAmount}px`,
          scrub: 1,
          pin: true,
        },
      })

      tl.to(".flavor-section", {
        x: `-=${scrollAmount}px`,
        ease: "power1.inOut",
      })
    }

    // Slider title animation
    const titleTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".flavor-section",
        start: "top top",
        end: "bottom 80%",
        scrub: 1,
      },
    })

    titleTl
      .to(".first-text-split", {
        xPercent: -30,
        ease: "power1.inOut",
      })
      .to(
        ".flavor-text-scroll",
        {
          xPercent: -22,
          ease: "power1.inOut",
        },
        "<"
      )
      .to(
        ".second-text-split",
        {
          xPercent: -10,
          ease: "power1.inOut",
        },
        "<"
      )
  })

  return (
    <div ref={sliderRef} className="slider-wrapper">
      <div className="flavors ">
        {flavorlists.map((flavor) => (
          <div
            className={` relative z-30 lg:w-[50vw] w-96 lg:h-[70vh] md:w-[90vw] md:h-[50vh] h-80 flex-none ${flavor.rotation}`}
            key={flavor.name}
          >
            <img
              src={`/images/${flavor.color}-bg.svg`}
              alt="bg"
              className="absolute bottom-0"
            />

            <img
              src={`/images/${flavor.color}-drink.webp`}
              alt=""
              className="drinks"
            />

            <img
              src={`/images/${flavor.color}-elements.webp`}
              alt=""
              className="elements"
            />

            <h1>{flavor.name}</h1>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FlavorSlider
