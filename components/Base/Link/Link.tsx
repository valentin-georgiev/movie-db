import Link from "next/link";
import { LinkProps } from "./Link.types";

export const LinkComponent = ({
    href = '#',
    text,
    className
}: LinkProps) => (
    <Link href = {href}>
        <a className = {className}>{text}</a>
    </Link>
)