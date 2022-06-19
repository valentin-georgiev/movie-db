import Link from "next/link";
import { convertToPascalCase } from "@project/utils/formatUtils";
import { LinkProps } from "./Link.types";

export const LinkComponent = ({
    href = '#',
    text,
    className,
    purpose,
}: LinkProps): JSX.Element => (
    <Link href = {href}>
        <a
            className = {className}
            data-testid = {`Link__${convertToPascalCase(purpose)}`}
        >
            {text}
        </a>
    </Link>
)