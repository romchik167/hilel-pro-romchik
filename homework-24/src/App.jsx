import { useState } from 'react';
import './App.css'
import Button from './Button'

function App() {
    const [myAge, setMyAge] = useState(16)

    const plusOneYearToAge = () => {
        console.log('Ваш вік збільшено на 1')
        setMyAge(myAge + 1)
        console.log(`Ваш вік ${myAge}`)
    }
    const minusOneYearToAge = () => {
        console.log('Ваш вік зменшено на 1')
        setMyAge(myAge - 1)
        console.log(`Ваш вік ${myAge}`)
    }
    const showText = () => {
        console.log('Lorem ispum dolor')
    }
    return (
        <div>
            <div>
                <h1>My first React App</h1>
            <Button text="+" onClick={plusOneYearToAge}/>
            <span>Ваш вік {myAge}
            </span>
            <Button text="-" onClick={minusOneYearToAge}/>
            </div>
            <div>
            <h3>I have no idea what i should do anymore</h3>
                <Button text="console log text" onClick={showText} />
            </div>
        </div>
    )
}

export default App
