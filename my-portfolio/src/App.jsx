import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeroSection from './components/HeroSection/Hero'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="app-background">
      <div className="app-container">
  <HeroSection/>
      </div>
    </div>
     
    </>
  )
}

export default App
