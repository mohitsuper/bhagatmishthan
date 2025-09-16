import { useState } from 'react'
import Allrouter from './pages/router/router'
import Header from './Commen-components/Header/Header'
import TopBar from './Commen-components/TopBar/TopBar'
import Footer from './Commen-components/Footer/Footer'
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <TopBar/>
     <Header/>
     <Allrouter/>
     <Footer/>
    </>
  )
}

export default App
