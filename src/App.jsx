import { useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Cards from './components/Cards/Cards'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
export default function App() {
  const [sidebars, setSidebars] = useState([]);
  const handleAddToSidebar = card => {
    const newSidebar = [...sidebars , card]
    console.log(newSidebar);
    setSidebars(newSidebar);
  }
  return (
    <div>
    <Header></Header>
    <Banner></Banner>
    <div className='md:flex max-w-7xl mx-auto'>
      <Cards handleAddToSidebar = {handleAddToSidebar}></Cards>
      <Sidebar></Sidebar>
    </div>
    
      
    </div>
  )
}