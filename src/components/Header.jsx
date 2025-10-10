import logo from '../assets/investment-calculator-logo.png';

export default function Header() {

    return (
        <header id="header">
            <img alt="logo showing a bag of money" src={logo} />
            <h1>Investment Calculator</h1>
        </header>
    )
}