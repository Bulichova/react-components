import { List } from './List'
import { LinkItem } from './LinkItem'
import { useContext } from 'react'
import AppContext from '../context/AppContext'
export function Navigation() {
  const { navigationLinks } = useContext(AppContext)
  return (
    <nav>
      <List className="navList">
        {navigationLinks.map(({ link, label }, index) => {
          return <LinkItem key={index} link={link} label={label} />
        })}
      </List>
    </nav>
  )
}
