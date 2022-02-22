import { Logo } from './Logo'
import { Navigation } from './Navigation'
import { UserMenu } from './UserMenu'

export function Header() {
  return (
    <header className="header">
      <div style={{ display: 'flex', width: '50%' }}>
        <Logo />
        <UserMenu />
      </div>
      <Navigation/>
    </header>
  )
}
