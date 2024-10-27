import { Outlet } from 'react-router-dom'
import Headers from './components/Headers'

const Layout = () => {
  return (
    <>
    <Headers />
    <Outlet />
    </>
    
  )
}

export default Layout