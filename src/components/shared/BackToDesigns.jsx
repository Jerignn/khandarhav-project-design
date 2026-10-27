import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

// A small floating button on every Design 1 and Design 2 page that goes back to the
// overview at "/", where both design options are shown side by side.
export default function BackToDesigns() {
  const location = useLocation()

  // true while the very bottom of the footer is on screen — the button slides away
  // so it doesn't cover the copyright / Privacy Policy line (mostly a phone problem)
  const [atBottom, setAtBottom] = useState(false)

  useEffect(
    function () {
      // (The observer reports right away, so the state is always fresh for the new page)
      const lastRow = document.querySelector('footer > :last-child')
      if (!lastRow) {
        return
      }

      const observer = new IntersectionObserver(function (entries) {
        setAtBottom(entries[0].isIntersecting)
      })
      observer.observe(lastRow)

      // Clean up: stop watching when the page changes
      return function () {
        observer.disconnect()
      }
    },
    [location.pathname],
  )

  // Only show it inside a design (/design-1..., /design-2...), not on the overview itself
  if (!location.pathname.startsWith('/design-')) {
    return null
  }

  return (
    <Link
      to="/"
      className={atBottom ? 'back-to-designs is-hidden' : 'back-to-designs'}
      aria-label="Back to all designs"
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M19 12H5M11 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span>All designs</span>
    </Link>
  )
}
