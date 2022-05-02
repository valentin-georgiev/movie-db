import { useState } from 'react';
import classnames from 'classnames';
import { useEffectOnMount } from 'utils/customHooks/useEffectOnMount';
import Link from "@components/Base/Link";
import { headerNavItems } from './headerItems';

import styles from './Header.module.scss';

export const Header: React.FC<{}> = () => {
    const [shouldShowHeader, setShouldShowHeader] = useState<boolean>(true);

    let oldScrollY = 0;

    const toggleHeader = () => {
        if(window.scrollY > oldScrollY) {
            setShouldShowHeader(false);
        } else {
            setShouldShowHeader(true);
        }

        oldScrollY = window.scrollY;
    }

    useEffectOnMount(() => {
        window.addEventListener("scroll", toggleHeader);

        return () => {
            window.removeEventListener("scroll", toggleHeader);
        }
    });

    return (
        <header className = {classnames(styles.header, {
            [styles['header__hidden']]: !shouldShowHeader
        })}>
            <div className = {styles['header__container']}>
                <div className = {styles['header__logo']}>
                    <Link
                        href = '/'
                        text = 'Movie DB'
                    />
                </div>
                <ul className = {styles['header__navigation']}>
                    {headerNavItems.map(mainNavItem => (
                        <li key = {mainNavItem.id}>
                            <Link
                                href = {mainNavItem.path}
                                text = {mainNavItem.label}
                                />
                            <ul className = {styles['header__navigation-dropdown']}>
                                {mainNavItem.children.map(subNavItem => (
                                    <li key = {subNavItem.id}>
                                        <Link
                                            href = {subNavItem.path}
                                            text = {subNavItem.label}
                                        />
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                    <li>
                        {/* <Link href = '/'> */}
                        <a>Login</a>
                        {/* </Link> */}
                    </li>
                </ul>
            </div>
        </header>
    )
}