import Header from "./components/Header";
import { LayoutProps } from "./Layout.types";

import styles from './Layout.module.scss';

export const Layout = ({ children }: LayoutProps): JSX.Element => (
    <>
        <Header />
        <div
            className = {styles.main}
            data-testid = 'Container__MainLayout'
        >
            {children}
        </div>
    </>
)