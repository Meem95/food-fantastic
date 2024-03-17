import { useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Cards from './components/Cards/Cards'
import Header from './components/Header/Header'
import Sidebars from './components/Sidebars/Sidebars'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Footer from './components/Footer/Footer'
export default function App() {
  const [sidebars, setSidebars] = useState([]);

    const handleAddToSidebar = (card) => {
      const isCardAlreadyAdded = sidebars.some((sidebarCard) => sidebarCard.recipe_id === card.recipe_id);
      if (!isCardAlreadyAdded) {
      const newSidebar = [...sidebars , card];
      setSidebars(newSidebar);
      }
      else {
      
        toast.error('This recipe is already in your sidebar!');
    }
   
     
    }
  return (
    <div>
      <ToastContainer />
    <Header></Header>
    <Banner></Banner>
      <div className='md:flex max-w-7xl mx-auto gap-8 justify-between'>
        <Cards handleAddToSidebar = {handleAddToSidebar}></Cards>
        <Sidebars sidebars = {sidebars}></Sidebars>
      </div>
    
      <Footer></Footer>
    </div>
  )
}