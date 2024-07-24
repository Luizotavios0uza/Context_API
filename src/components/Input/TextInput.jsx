import styles from './TextInput.Module.css'

export function Texto({ label, id, onChange, onBlur, value }) {

    return (
        <>
            <label htmlFor={id}>{label}</label>
            <input
                type="text"
                id={id}
                onChange={onChange}
                value={value}
                onBlur={onBlur}
            />
        </>
    )

}