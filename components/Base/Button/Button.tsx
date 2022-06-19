import { ButtonProps } from "./Button.types"

export const Button = ({
    type,
    className,
    label,
    purpose,
    onClick
}: ButtonProps): JSX.Element => (
    <button
        type = {type}
        className = {className}
        onClick = {onClick}
        data-testid = {`Button__${purpose}`}
    >
        {label}
    </button>
)