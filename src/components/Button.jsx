
export function Button(props) {
    const {children, className, checked, disabled, onClick, type} = props;

    return (
        <button
            disabled={disabled}
            onClick={onClick}
            className={`btn ${className}`}
            type={type}
            style={{textDecoration: checked ? 'line-through' : 'initial'}}
        >
            {children}
        </button>
    )
}