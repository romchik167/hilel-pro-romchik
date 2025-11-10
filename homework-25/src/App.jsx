import { useState } from 'react'
import './App.css'
import AndroidLogo from './components/AndroidLogo'
import AppleLogo from './components/AppleLogo'
import BtnApple from './components/BtnApple'
import BtnAndroid from './components/BtnAndroid'
import Results from './components/Results'

function App() {
  const [countApple, setCountApple] = useState(() => {
    const value = +(localStorage.getItem('Apple count') || 0);
    return value;
  })
  const [countAndroid, setCountAndroid] = useState(() => {
    const value = +(localStorage.getItem('Android count') || 0);
    return value;
  })

  function handleIncrementApple() {
    setCountApple((prev) => {
      const next = prev + 1
      localStorage.setItem('Apple count', String(next))
      return next
    })
  }

  function handleIncrementAndroid() {
    setCountAndroid((prev) => {
      const next = prev + 1
      localStorage.setItem('Android count', String(next))
      return next
    })
  }

  return (
    <>
    <h1>Who is the best?</h1>
    <div className='who-is-the-best-wrap'>
      <div className='logo-wrap'>
        <AppleLogo />
        <BtnApple count={countApple} onIncrement={handleIncrementApple} />
      </div>
      <div className='logo-wrap'>
        <AndroidLogo />
        <BtnAndroid count={countAndroid} onIncrement={handleIncrementAndroid} />
      </div>
    </div>
    <Results countApple={countApple} countAndroid={countAndroid} />

    </>
  )
}

export default App