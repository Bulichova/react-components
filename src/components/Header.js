import { Logo } from './Logo'
import { Navigation } from './Navigation'
const links = [
  {
    link: '/',
    label: 'home',
  },
  {
    link: '/',
    label: 'about',
  },
  {
    link: '/',
    label: 'contacts',
  },
]

export function Header() {
  return (
    <header className="header">
      <Logo />
      <Navigation links={links} />
    </header>
  )
}
