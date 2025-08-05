import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { SplitText } from "gsap/all"

const MessageSection = () => {
  useGSAP(() => {
    const firstMsgSplit = SplitText.create(".first-message", {
      type: "words",
    })
    const secondMsgSplit = SplitText.create(".second-message", {
      type: "words",
    })
    const paragraphMsgSplit = SplitText.create(".message-content p", {
      type: "words, lines",
      linesClass: "paragraph-line",
    })

    //1.  Animate first message
    gsap.to(firstMsgSplit.words, {
      color: "#faeade",
      stagger: 1,
      ease: "power1.in",
      scrollTrigger: {
        trigger: ".message-content",
        start: "top center",
        end: "30% center",
        scrub: true,
      },
    })

    //2. Animate second message
    gsap.to(secondMsgSplit.words, {
      color: "#faeade",
      stagger: 1,
      ease: "power1.in",

      scrollTrigger: {
        trigger: ".second-message",
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
    })

    // 3. Animate reveal text: Fuel up
    gsap.to(".msg-text-scroll", {
      clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)",
      duration: 1,
      delay: 1,
      ease: "circ.inOut",
      scrollTrigger: {
        trigger: ".msg-text-scroll",
        start: "top 60%",
      },
    })
    // 4. Animate paragraph text
    // this can be done without timeline as in the no. 3 but doing this way help in future to add multiple tween/animation in a sequence
    const paragraphTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".message-content p",
        start: "top center",
      },
    })
    paragraphTl.from(paragraphMsgSplit.words, {
      yPercent: 300,
      rotate: 3,
      ease: "power1.inOut",
      duration: 1,
      stagger: 0.01,
    })
  })

  return (
    <section className="message-content">
      <div className="container mx-auto flex-center py-28 relative">
        <div className="size-full">
          <div className="msg-wrapper">
            <h1 className="first-message">Stir up your fearless past and </h1>

            <div
              className="msg-text-scroll"
              style={{
                clipPath: "polygon(0 0, 0 0, 0 93%, 0% 100%)",
              }}
            >
              <div className="bg-light-brown md:pb-5 pb-3 px-5">
                <h2 className="text-red-brown">Fuel up</h2>
              </div>
            </div>

            <h1 className="second-message">
              your future with every gulp of Perfect Protein
            </h1>
          </div>

          <div className="flex-center md:mt-20 mt-10">
            <div className="max-w-md px-10 flex-center overflow-hidden">
              <p>
                Rev up your rebel spirit and feed the adventure of life with
                SPYLT, where you're one chug away from epic nostalgia and
                fearless fun.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MessageSection
