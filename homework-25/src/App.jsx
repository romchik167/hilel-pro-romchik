import { useState } from 'react'
import './App.css'
import AndroidLogo from './components/AndroidLogo'
import AppleLogo from './components/AppleLogo'
import CandidateBtn from './components/CandidateBtn'
import Results from './components/Results'

function App() {
  const initialCandidates = [
    { id: 'apple', name: 'Apple', Logo: AppleLogo },
    { id: 'android', name: 'Android', Logo: AndroidLogo },
  ]

  const [candidates, setCandidates] = useState(() => {
    return initialCandidates.map(candidate => ({
      ...candidate,
      count: +(localStorage.getItem(`${candidate.id} count`) || 0)
    }))
  })

  function handleIncrement(candidateId) {
    setCandidates(prev =>
      prev.map(candidate => {
        if (candidate.id === candidateId) {
          const next = candidate.count + 1
          localStorage.setItem(`${candidateId} count`, String(next))
          return { ...candidate, count: next }
        }
        return candidate
      })
    )
  }

  return (
    <>
    <h1>Who is the best?</h1>
    <div className='who-is-the-best-wrap'>
      {candidates.map(candidate => (
        <div key={candidate.id} className='logo-wrap'>
          <candidate.Logo />
          <CandidateBtn
            name={candidate.name}
            count={candidate.count}
            onIncrement={() => handleIncrement(candidate.id)}
          />
        </div>
      ))}
    </div>
    <Results candidates={candidates} />

    </>
  )
}

export default App