import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// When the user goes to a new page, jump back to the top of that page.
// (Without this, the browser would keep the old scroll position.)
// If the address ends with a section, like /design-1#services, scroll to that section instead.
export default function ScrollToTop() {
  const location = useLocation()

  useEffect(
    function () {
      if (location.hash) {
        const section = document.getElementById(location.hash.slice(1))
        if (section) {
          section.scrollIntoView()
          return
        }
      }
      window.scrollTo(0, 0)
    },
    [location.pathname, location.hash], // run again every time the page address changes
  )

  // This component doesn't show anything on screen
  return null
}
