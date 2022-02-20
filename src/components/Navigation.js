import { List } from './List'
import { LinkItem } from './LinkItem'
export function Navigation({ links }) {
  return (
    <nav>
      <List className="navList">
        {links.map(({ link, label }, index) => {
          return <LinkItem key={index} link={link} label={label} />
        })}
      </List>
    </nav>
  )
}
