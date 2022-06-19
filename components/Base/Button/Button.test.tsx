import ShallowRenderer from 'react-shallow-renderer';
import { screen, render } from '@testing-library/react';
import { Button } from "./Button";

const props = {
    type: 'button',
    className: "",
    label: 'button',
    purpose: 'Test',
    onClick: jest.fn()
}

describe("Button", () => {
    test('Button is rendered', () => {
        render(<Button {...props} />);

        expect(screen.getByTestId('Button__Test')).toBeInTheDocument();
    });

    test('Button is rendered with proper props', () => {
        const renderer = new ShallowRenderer();
        const shallowButton = renderer.render(<Button {...props} />);

        expect(shallowButton.type).toEqual('button');
        expect(shallowButton.props.className).toEqual('');
        expect(shallowButton.props.type).toEqual('button');
        expect(shallowButton.props.children).toEqual('button');
        expect(typeof shallowButton.props.onClick).toBe("function");
    });
})