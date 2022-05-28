import { useState } from 'react';
import classnames from 'classnames';

import { convertToPascalCase } from 'project/utils/formatUtils';
import { useEffectOnMount } from 'project/utils/customHooks/useEffectOnMount';

import Link from "@components/Base/Link";
import { headerNavItems } from './headerItems';

import styles from './Header.module.scss';

export const Header: React.FC<{}> = () => {
    const [shouldShowHeader, setShouldShowHeader] = useState<boolean>(true);

    let oldScrollY: Number = 0;

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
        <header
            className = {classnames(styles.header, {
                [styles['header__hidden']]: !shouldShowHeader
            })}
            data-testid = 'Wrapper__Header'
        >
            <div className = {styles['header__container']}>
                <div className = {styles['header__logo']}>
                    <Link
                        href = '/'
                        text = 'Movie DB'
                        purpose = {'Logo'}
                    />
                </div>
                <ul
                    className = {styles['header__navigation']}
                    data-testid = {'List__HeaderNavigation'}
                >
                    {headerNavItems.map(mainNavItem => (
                        <li key = {mainNavItem.id}>
                            <Link
                                href = {mainNavItem.path}
                                text = {mainNavItem.label}
                                purpose = {convertToPascalCase(mainNavItem.label)}
                            />
                            <ul
                                className = {styles['header__navigation-dropdown']}
                                data-testid = {'Dropdown__HeaderNavigationDropdown'}
                            >
                                {mainNavItem.children.map(subNavItem => (
                                    <li key = {subNavItem.id}>
                                        <Link
                                            href = {subNavItem.path}
                                            text = {subNavItem.label}
                                            purpose = {convertToPascalCase(subNavItem.label)}
                                        />
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                    <li>
                        {/* TODO: login functionality */}
                        <a data-testid = {'Link__Login'}>Login</a>
                    </li>
                </ul>
            </div>
        </header>
    )
}