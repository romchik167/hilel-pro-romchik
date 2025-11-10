import { useState } from 'react'
import AppleLogo from './AppleLogo'
import AndroidLogo from './AndroidLogo'

export default function Results({ countApple, countAndroid }) {
  const [show, setShow] = useState(false)

  return (
    <div className="results-container">
      <button onClick={() => setShow((s) => !s)}>
        {show ? 'Hide results' : 'Show results'}
      </button>

      {show && (
        <div className="results-wrap">
          {countAndroid < countApple && (
            <div className="logo-wrap">
              <AppleLogo />
              <span>Apple is the best</span>
            </div>
          )}

          {countAndroid > countApple && (
            <div className="logo-wrap">
              <AndroidLogo />
              <span>Android is the best</span>
            </div>
          )}

          {countAndroid === countApple && (
            <div className="logo-wrap">
              <span>Результати рівні</span>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
