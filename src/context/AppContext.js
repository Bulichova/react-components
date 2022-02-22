import { createContext } from 'react'
const AppContext = createContext()
export default AppContext
export const appContext = {
  user: { name: 'Dima', email: 'boikotv@gmail.com', age: '10' },
  login: [],
  navigationLinks: [
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
  ],
}
