import { useState } from "react"
import Header from "./components/Header"
import ResultsTable from "./components/ResultsTable"
import UserInput from "./components/UserInput"

function App() {
  const [initialInvestment, setInitialInvestment] = useState("");
  const [annualInvestment, setAnnualInvestment] = useState("");
  const [expectedReturn, setExpectedReturn] = useState("");
  const [duration, setDuration] = useState("");

  return (
    <>
      <Header />
        <div id="user-input">
          <div className="input-group">
            <UserInput label="initial-investment" title="INITIAL INVESTMENT" onChange={setInitialInvestment}/>
            <UserInput label="annual-investment" title="ANNUAL INVESTMENT"onChange={setAnnualInvestment}/>
          </div>
          <div className="input-group">
            <UserInput label="expected-return" title="EXPECTED RETURN"onChange={setExpectedReturn}/>
            <UserInput label="duration" title="DURATION"onChange={setDuration}/>
          </div>
        </div>
      <ResultsTable />
    </>
  )
}

export default App
