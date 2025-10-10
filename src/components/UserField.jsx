export default function UserField({ label, title, onChange }) {
    return (
        <div>
            <label htmlFor={label}>{title}</label>
            <input type="number" id={label} onChange={(event) => onChange(label, event.target.value)} />
        </div>
    )
}