export type InputProps = {
    className?: string,
    type?: string,
    placeholder?: string,
    value: string | number,
    purpose: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>,
}