// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import githubIcon from './assets/github-mark.svg'
// import './App.css'
import {Nav}  from './components/Navbar'
import { Footer } from './components/Footer'
// import {Bio} from './components/Bio'
// import {Projects} from './components/Projects'
import {Contact} from './components/ContactMe';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/* <div> */}
     <Nav/>
     {/* <Bio></Bio> */}
     {/* <Projects></Projects> */}
     <Contact/>
     <Footer></Footer>
        {/* <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://github.com/EzekielCampos" target="_blank">
          <img src={githubIcon} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
