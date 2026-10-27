import { useEffect, useState } from 'react'

// Design 2's photo slider: photos fade from one to the next, with a row of
// progress bars on top and a "01 / 03" counter, like a camera feed.
// `images`    = list of photo paths
// `slideTime` = how long each photo stays on screen, in milliseconds
export default function ImageCarousel({ images, slideTime = 3000 }) {
  // Which photo is showing right now (0 = the first one)
  const [current, setCurrent] = useState(0)

  useEffect(
    function () {
      // Every slideTime, move to the next photo (and loop back to the first at the end)
      const timer = setInterval(function () {
        setCurrent(function (previous) {
          if (previous === images.length - 1) {
            return 0
          }
          return previous + 1
        })
      }, slideTime)

      // Clean up: stop the timer when the component disappears
      return function () {
        clearInterval(timer)
      }
    },
    [images.length, slideTime],
  )

  return (
    // --slide-time lets the CSS fill each progress bar in exactly one slide
    <div className="d2-carousel" style={{ '--slide-time': slideTime + 'ms' }}>
      {/* All photos sit on top of each other; only the current one is visible (see CSS) */}
      {images.map((image, index) => (
        <img
          key={image}
          src={image}
          alt=""
          loading="lazy"
          className={index === current ? 'd2-carousel-img is-visible' : 'd2-carousel-img'}
        />
      ))}

      {/* One bar per photo: past ones full, the current one filling up, the rest empty */}
      <div className="d2-carousel-bars" aria-hidden="true">
        {images.map((image, index) => {
          let barClass = ''
          if (index < current) {
            barClass = 'is-done'
          }
          if (index === current) {
            barClass = 'is-active'
          }
          // The key changes each slide so the fill animation restarts
          return <span key={image + (index === current ? current : '')} className={barClass} />
        })}
      </div>

      <span className="d2-carousel-count" aria-hidden="true">
        {String(current + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
      </span>
    </div>
  )
}
