import { useState } from 'react'
import './App.css'
import AndroidLogo from './components/AndroidLogo'
import AppleLogo from './components/AppleLogo'

function App() {
  const [countApple, setCountApple] = useState(() => {
    const value = +(localStorage.getItem('Apple count') || 0);
    return value;
  })
  const [countAndroid, setCountAndroid] = useState(() => {
    const value = +(localStorage.getItem('Apple count') || 0);
    return value;
  })
  const [showResults, setShowResults] = useState(false)

  return (
    <>
    <h1>Who is the best?</h1>
    <div className='who-is-the-best-wrap'>
      <div className='logo-wrap'>
        <AppleLogo />
          <button onClick={() => setCountApple((count) => {
            const finalCount = count + 1;
            localStorage.setItem('Apple count', finalCount)
            return finalCount;
            })}>
            Apple is the best {countApple}
          </button>
      </div>
      <div className='logo-wrap'>
        <AndroidLogo />
        <button onClick={() => setCountAndroid((count) => {
          const finalCount = count + 1;
          localStorage.setItem('Android count', finalCount)
          return finalCount;
          })}>
          Android is the best {countAndroid}
        </button>
      </div>
    </div>
    <button onClick={() => setShowResults((s) => !s)}>
      Show results
    </button>

    {showResults && (
      <div className="results-wrap">
        {countAndroid < countApple && (
          <div className='logo-wrap'>
            <AppleLogo />
            <span>Apple is the best</span>
          </div>
        )}

        {countAndroid > countApple && (
          <div className='logo-wrap'>
            <AndroidLogo />
            <span>Android is the best</span>
          </div>
        )}

        {countAndroid === countApple && (
          <div className='logo-wrap'>
            <span>Результати рівні!</span>
          </div>
        )}
      </div>
    )}

    </>
  )
}

export default App
