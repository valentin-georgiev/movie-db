export type ButtonProps = {
    label: string;
    className: string;
    type: "button" | "submit" | "reset";
    purpose: string;
    onClick: () => void;
}