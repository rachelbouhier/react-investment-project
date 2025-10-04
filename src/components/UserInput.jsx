export default function UserInput() {
    return (
        <div id="user-input">
            <div className="input-group">
                <div>
                    <label for="initial-investment">INITIAL INVESTMENT</label>
                    <input type="input" id="intial-investment"/>
                </div>
                <div>
                    <label for="annual-investment">ANNUAL INVESTMENT</label>
                    <input type="input" id="annual-investment"/>
                </div>
            </div>
            <div className="input-group">
                <div>
                    <label for="expected-return">EXPECTED RETURN</label>
                    <input type="input" id="expected-return"/>
                </div>
                <div>
                    <label for="duration">DURATION</label>
                    <input type="input" id="duration"/>
                </div>
            </div>
        </div>
    )
}