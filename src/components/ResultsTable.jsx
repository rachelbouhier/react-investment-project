import { formatter } from "../util/investment";

export default function ResultsTable({ annualData }) {
    return (
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
                {annualData && annualData.map((data) => (
                    <tr key={data.year}>
                        <td>{data.year}</td>
                        <td>{formatter.format(data.valueEndOfYear)}</td>
                        <td>{formatter.format(data.interest)}</td>
                        <td>{formatter.format(data.annualInvestment)}</td>
                        <td>Invested capital</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}