import Link from "next/link";
import { LinkProps } from "./Link.types";

export const LinkComponent = ({
    href = '#',
    text,
    className,
    purpose,
}: LinkProps) => (
    <Link href = {href}>
        <a
            className = {className}
            data-testid = {`Link__${purpose}`}
        >
            {text}
        </a>
    </Link>
)