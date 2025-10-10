import { useState } from "react"
import Header from "./components/Header"
import ResultsTable from "./components/ResultsTable"
import UserInput from "./components/UserInput"

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  })

  function handleUserInput(inputName, inputValue) {
    setUserInput((prevInput) => {
      return {
          ...prevInput,
          [inputName]: +inputValue
      }
    })
  }
    
  return (
    <>
      <Header />
      <UserInput onChange={handleUserInput}/>
      <ResultsTable userInput={userInput} />
    </>
  )
}

export default App
