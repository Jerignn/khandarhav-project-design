// Loads Open Sans, the font kandrhvac.com uses, for Design 2 pages only.
// React moves these tags into the page <head> and adds them just once.
const FONT_URL = 'https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;0,700;0,800;1,800&display=swap'

export default function Fonts() {
  return <link rel="stylesheet" href={FONT_URL} precedence="default" />
}
