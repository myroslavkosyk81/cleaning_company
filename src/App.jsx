// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Contact } from './components/contact/Contact'
import Hero from './components/hero/Hero'
import { Portfolio } from './components/portfolio/Portfolio'
import Services from './components/services/Services'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <section id='#home'>
        <Hero />
      </section>
      <section id='#services'>
        <Services />
      </section>
      <section id='#portfolio'>
        <Portfolio />
      </section>
      <section id='#contact'>
        <Contact />
      </section>
     
    </div>

    // <>
    //   <div>
    //     <a href="https://vite.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </>
  )
}

export default App
