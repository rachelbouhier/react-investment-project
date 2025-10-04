import { useState } from "react"
import Header from "./components/Header"
import ResultsTable from "./components/ResultsTable"
import UserInput from "./components/UserInput"
import { calculateInvestmentResults } from "./util/investment";

function App() {
  const [initialInvestment, setInitialInvestment] = useState("");
  const [annualInvestment, setAnnualInvestment] = useState("");
  const [expectedReturn, setExpectedReturn] = useState("");
  const [duration, setDuration] = useState("");

  const annualData =
  initialInvestment &&
  annualInvestment &&
  expectedReturn &&
  duration
    ? calculateInvestmentResults({
        initialInvestment: initialInvestment,
        annualInvestment: annualInvestment,
        expectedReturn: expectedReturn,
        duration: duration,
      })
    : null;

  console.log(annualData);

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
      <ResultsTable annualData={annualData} />
    </>
  )
}

export default App
