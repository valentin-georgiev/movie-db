import ShallowRenderer from 'react-shallow-renderer';
import { screen, render } from '@testing-library/react';
import { LinkComponent } from "./Link";

const props = {
    href: '/news',
    text: 'news',
    className: '',
    purpose: 'News',
}

describe("Link", () => {
    test('Link is rendered', () => {
        render(<LinkComponent {...props} />);

        expect(screen.getByTestId('Link__News')).toBeInTheDocument();
    });

    test('Link is rendered with proper props', () => {
        const renderer = new ShallowRenderer();
        const Link = renderer.render(<LinkComponent {...props} />);

        expect(Link.props.href).toEqual('/news');
        expect(Link.props.children.type).toEqual('a');
        expect(Link.props.children.props.className).toEqual('');
        expect(Link.props.children.props['data-testid']).toEqual('Link__News');
        expect(Link.props.children.props.children).toEqual('news');
    });

    test('Link is rendered with # as href', () => {
        delete props.href;
        
        const renderer = new ShallowRenderer();
        const Link = renderer.render(<LinkComponent {...props} />);

        expect(Link.props.href).toEqual('#');
    });
})