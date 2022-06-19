import ShallowRenderer from 'react-shallow-renderer';
import { screen, render } from '@testing-library/react';
import { Input } from "./Input";

const props = {
    className: "",
    type: 'text',
    placeholder: 'Placeholder...',
    value: "value",
    purpose: 'test input',
    onChange: jest.fn()
}

describe("Input", () => {
    test('Input is rendered', () => {
        render(<Input {...props} />);

        expect(screen.getByTestId('Input__TestInput')).toBeInTheDocument();
    });

    test('Input is rendered with proper props', () => {
        const renderer = new ShallowRenderer();
        const shallowInput = renderer.render(<Input {...props} />);

        expect(shallowInput.type).toEqual('input');
        expect(shallowInput.props.className).toEqual('');
        expect(shallowInput.props.type).toEqual('text');
        expect(shallowInput.props.placeholder).toEqual('Placeholder...');
        expect(typeof shallowInput.props.onChange).toBe("function");
        expect(shallowInput.props.value).toEqual('value');
    });
})