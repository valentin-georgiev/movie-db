import { screen, render } from '@testing-library/react';
import { PageIntro } from "./PageIntro";

describe("PageIntro", () => {
    test('PageIntro is rendered correctly', () => {
        render(<PageIntro />);

        expect(screen.getByTestId('Wrapper__Intro')).toBeInTheDocument();
    });

    test('PageIntro layout is rendered correctly', () => {
        render(<PageIntro />);

        expect(screen.getByTestId('Text__IntroTitle')).toBeInTheDocument();
        expect(screen.getByTestId('Text__IntroSubTitle')).toBeInTheDocument();
        expect(screen.getByTestId('Input__Search')).toBeInTheDocument();
        expect(screen.getByTestId('Link__Search')).toBeInTheDocument();
    });
})