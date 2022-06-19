import { InputProps } from "./Input.types";
import { convertToPascalCase } from "@project/utils/formatUtils";

export const Input = ({
    className,
    type = 'text',
    placeholder = '',
    value,
    purpose,
    onChange,
}: InputProps): JSX.Element => (
    <input
        className = {className}
        type = {type}
        placeholder = {placeholder}
        value = {value}
        onChange = {onChange}
        data-testid = {`Input__${convertToPascalCase(purpose)}`}
    />
)