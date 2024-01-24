
export function Button(props) {
    const {children, className, checked, disabled, onClick} = props;
    return (
        <button
            disabled={disabled}
            onClick={onClick}
            className={`btn ${className}`}
            style={{textDecoration: checked ? 'line-through' : 'initial'}}
        >
            {children}
        </button>
    )
}