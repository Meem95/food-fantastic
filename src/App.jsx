import './App.css'
import Banner from './components/Banner/Banner'
import Cards from './components/Cards/Cards'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
export default function App() {
  return (
    <div>
    <Header></Header>
    <Banner></Banner>
    <div className='md:flex max-w-7xl mx-auto'>
      <Cards></Cards>
      <Sidebar></Sidebar>
    </div>
    
      
    </div>
  )
}