import UserField from "./UserField";

export default function UserInput({ onChange }) {
    return (
        <section id="user-input">
            <div className="input-group">
                <UserField label="initialInvestment" title="INITIAL INVESTMENT" onChange={onChange}/>
                <UserField label="annualInvestment" title="ANNUAL INVESTMENT" onChange={onChange}/>
            </div>
            <div className="input-group">
                <UserField label="expectedReturn" title="EXPECTED RETURN" onChange={onChange}/>
                <UserField label="duration" title="DURATION" onChange={onChange}/>
            </div>
        </section>
    )
}