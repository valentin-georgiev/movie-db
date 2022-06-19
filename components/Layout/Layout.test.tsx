import { screen, render } from '@testing-library/react';
import { Layout } from "./Layout";

const children = () => <div data-testid = 'Container__MainContentChildren'></div>

describe("Layout", () => {
    test('Layout is rendered correctly with Header and Children', () => {
        render(<Layout>{children()}</Layout>);

        expect(screen.getByTestId('Wrapper__Header')).toBeInTheDocument();
        expect(screen.getByTestId('Container__MainContentChildren')).toBeInTheDocument();
    });
})