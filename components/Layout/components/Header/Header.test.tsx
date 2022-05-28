import { screen, render } from '@testing-library/react';
import { Header } from './Header';

describe("Header", () => {
    test('Header is rendered', () => {
        render(<Header />);

        expect(screen.getByTestId('Wrapper__Header')).toBeInTheDocument();
    });

    test('Header logo is rendered', () => {
        render(<Header />);

        expect(screen.getByTestId('Link__Logo')).toBeInTheDocument();
    });

    test('Header navigation is rendered', () => {
        render(<Header />);

        expect(screen.getByTestId('List__HeaderNavigation')).toBeInTheDocument();
        expect(screen.getByTestId('Link__Movies')).toBeInTheDocument();
        expect(screen.getAllByTestId('Link__Popular')).toHaveLength(2);
        expect(screen.getByTestId('Link__Upcoming')).toBeInTheDocument();
        expect(screen.getAllByTestId('Link__TopRated')).toHaveLength(2);
        expect(screen.getByTestId('Link__TvShows')).toBeInTheDocument();
        expect(screen.getByTestId('Link__Login')).toBeInTheDocument();
        expect(screen.getAllByTestId('Dropdown__HeaderNavigationDropdown')).toHaveLength(2);
    });
})