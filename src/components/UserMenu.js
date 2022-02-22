import { useContext } from 'react'
import AppContext from '../context/AppContext'
export function UserMenu() {
  const { user } = useContext(AppContext)
//   console.log(user.name)
  return <div>hello, {user.name}</div>
}
