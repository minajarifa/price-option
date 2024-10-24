
import { Outlet } from 'react-router-dom'
import './App.css'
import Navber from './Page/Navber/Navber'
import Footer from './Page/Footer/Footer'

function App() {


  return (
    <>
      <div className='font-serif'>
        <Navber />
        <div className='m-10'>
          <Outlet />
        </div>
        <Footer />
      </div>

    </>
  )
}

export default App
