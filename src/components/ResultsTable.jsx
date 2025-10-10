import { calculateInvestmentResults, formatter } from "../util/investment";

export default function ResultsTable({ userInput }) {
    const resultsData = calculateInvestmentResults(userInput);
    let totalInterest = 0;

    return (
            resultsData.length >0 && (
            <table id="result">
                <thead>
                    <tr>
                        <th>Year</th>
                        <th>Investment Value</th>
                        <th>Interest (year)</th>
                        <th>Total interest</th>
                        <th>Invested capital</th>
                    </tr>
                </thead>
                <tbody>
                    {resultsData.map((data) => {
                        totalInterest += data.interest;

                        return (
                            <tr key={data.year}>
                                <td>{data.year}</td>
                                <td>{formatter.format(data.valueEndOfYear)}</td>
                                <td>{formatter.format(data.interest)}</td>
                                <td>{formatter.format(totalInterest)}</td>
                                <td>{formatter.format(data.valueEndOfYear - totalInterest)}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            )
    )
}