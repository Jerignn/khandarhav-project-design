import { useEffect, useState } from 'react'


// A simple auto-playing carousel: no arrows, the photos fade from one to the next.
// `images`  = list of photo paths
// `playing`   = true while the photos should keep changing (for example, while hovered)
// `slideTime` = how long each photo stays on screen, in milliseconds (default 1800 = 1.8 seconds)
export default function ImageCarousel({ images, playing, slideTime = 1800 }) {
  // Which photo is showing right now (0 = the first one)
  const [current, setCurrent] = useState(0)

  useEffect(
    function () {
      // When not playing, go back to the first photo and stop
      if (!playing) {
        setCurrent(0)
        return
      }

      // Every slideTime, move to the next photo (and loop back to the first at the end)
      const timer = setInterval(function () {
        setCurrent(function (previous) {
          if (previous === images.length - 1) {
            return 0
          }
          return previous + 1
        })
      }, slideTime)

      // Clean up: stop the timer when hovering ends or the component disappears
      return function () {
        clearInterval(timer)
      }
    },
    [playing, images.length, slideTime],
  )

  return (
    <div className="carousel">
      {/* All photos sit on top of each other; only the current one is visible (see CSS) */}
      {images.map((image, index) => (
        <img
          key={image}
          src={image}
          alt=""
          loading="lazy"
          className={index === current ? 'carousel-img is-visible' : 'carousel-img'}
        />
      ))}

      {/* Small dots that show which photo is on screen */}
      <div className="carousel-dots" aria-hidden="true">
        {images.map((image, index) => (
          <span key={image} className={index === current ? 'is-active' : ''} />
        ))}
      </div>
    </div>
  )
}
