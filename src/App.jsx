// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
// import { Contact } from './components/contact/Contact'
import Home from './pages/Home'
import House  from './pages/House'
import Apartment from './pages/Apartment';
import Office from './pages/Office';
import Contact from './pages/Contact';

function App() {
  // const [count, setCount] = useState(0)
  // return (
    return <BrowserRouter>
  {/* <Header /> */}
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/house" element={<House />} />
    <Route path="/apartment" element={<Apartment />} />
    <Route path="/office" element={<Office />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
  {/* <Footer /> */}
  </BrowserRouter>
    // <div className='container'>
    //   <section id='#home'>
    //     <Hero />
    //   </section>
    //   {/* <section id='#services'>
    //     <Services />
    //   </section> */}
    //   {/* <section id='#portfolio'> */}
    //     <Portfolio />
    //   {/* </section> */}
    //   <section id='#contact'>
    //     <Contact />
    //   </section>
    // </div>

  // )
}

export default App
