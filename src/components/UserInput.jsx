export default function UserInput({ label, title, onChange }) {
    return (
        <div>
            <label htmlFor={label}>{title}</label>
            <input type="number" id={label} onChange={(event) => onChange(Number(event.target.value))}/>
        </div>
    )
}