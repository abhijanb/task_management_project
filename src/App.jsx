import './App.css'
import { BrowserRouter, Routes,Route, Link } from 'react-router-dom'
import { SideBar } from './Components/Sidebar/Sidebar.components'
import { Button } from './Components/Button.components'
import { Navbar } from './Components/Navbar/Navbar.components'

function App() {
  return (
    <>
      <BrowserRouter>
      <div className='flex flex-row'>
<SideBar />
    <div className='w-[1150px]  h-full m-2' >
<Navbar className="m-2"/>
    </div>
      </div>
      </BrowserRouter>
    </>
  )
}

export default App
