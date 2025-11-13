import { useState } from 'react'

export default function Results({ candidates }) {
  const [show, setShow] = useState(false)
  
  const maxCount = Math.max(...candidates.map(c => c.count), 0)
  const winners = candidates.filter(c => c.count === maxCount && c.count > 0)
  const allZero = candidates.every(c => c.count === 0)

  return (
    <div className="results-container">
      <button onClick={() => setShow((s) => !s)}>
        {show ? 'Hide results' : 'Show results'}
      </button>

      {show && (
        <div className="results-wrap">
          {allZero && (
            <div className="logo-wrap">
              <span>Поки немає результатів!</span>
            </div>
          )}

          {winners.length === 1 && (() => {
            const Winner = winners[0].Logo
            return (
              <div className="logo-wrap">
                <Winner />
                <span>{winners[0].name} is the best ({winners[0].count})</span>
              </div>
            )
          })()}

          {winners.length > 1 && (
            <div className="logo-wrap">
              <span>Нічия: {winners.map(w => w.name).join(', ')} ({maxCount})</span>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

