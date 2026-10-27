import { useEffect, useState } from 'react'

// Photo grid for "Our Work". Clicking a photo opens it big on a dark screen.
// `photos` = list of { src, alt }
export default function Gallery({ photos }) {
  // Which photo is open (-1 = none)
  const [open, setOpen] = useState(-1)

  function close() {
    setOpen(-1)
  }

  // Go to the next / previous photo, looping around at the ends
  function next() {
    setOpen((current) => (current + 1) % photos.length)
  }

  function previous() {
    setOpen((current) => (current - 1 + photos.length) % photos.length)
  }

  // While a photo is open: Esc closes it, the arrow keys move between photos
  useEffect(
    function () {
      if (open === -1) {
        return
      }

      function handleKey(event) {
        if (event.key === 'Escape') {
          setOpen(-1)
        }
        if (event.key === 'ArrowRight') {
          setOpen((current) => (current + 1) % photos.length)
        }
        if (event.key === 'ArrowLeft') {
          setOpen((current) => (current - 1 + photos.length) % photos.length)
        }
      }

      window.addEventListener('keydown', handleKey)
      return function () {
        window.removeEventListener('keydown', handleKey)
      }
    },
    [open, photos.length],
  )

  function code(index) {
    return 'JOB-' + String(index + 1).padStart(2, '0')
  }

  return (
    <>
      <ul className="d2-gallery">
        {photos.map((photo, index) => (
          <li key={photo.src}>
            <button type="button" onClick={() => setOpen(index)} aria-label={'Open photo: ' + photo.alt}>
              <img src={photo.src} alt={photo.alt} loading="lazy" />
              <span className="d2-gallery-label">
                <span className="d2-mono">{code(index)}</span>
                {photo.alt}
              </span>
            </button>
          </li>
        ))}
      </ul>

      {open !== -1 && (
        <div className="d2-lightbox" role="dialog" aria-modal="true" aria-label={photos[open].alt} onClick={close}>
          {/* Clicks on the photo itself shouldn't close it */}
          <figure onClick={(event) => event.stopPropagation()}>
            <img src={photos[open].src} alt={photos[open].alt} />
            <figcaption>
              <span className="d2-mono">
                {code(open)} · {open + 1} / {photos.length}
              </span>
              {photos[open].alt}
            </figcaption>
          </figure>

          <button type="button" className="d2-lightbox-btn is-close" onClick={close} aria-label="Close">
            ✕
          </button>
          <button
            type="button"
            className="d2-lightbox-btn is-prev"
            onClick={(event) => {
              event.stopPropagation()
              previous()
            }}
            aria-label="Previous photo"
          >
            ←
          </button>
          <button
            type="button"
            className="d2-lightbox-btn is-next"
            onClick={(event) => {
              event.stopPropagation()
              next()
            }}
            aria-label="Next photo"
          >
            →
          </button>
        </div>
      )}
    </>
  )
}
