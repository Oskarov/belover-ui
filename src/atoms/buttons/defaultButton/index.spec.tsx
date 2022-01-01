import React from 'react';
import {render, screen} from '@testing-library/react';
import DefaultButton from '../../../atoms/buttons/defaultButton';

describe('DefaultButton', () => {
    it('applies default type button', () => {
        render(<DefaultButton>Hello</DefaultButton>);
        expect(screen.getAllByRole('button')[0]).toHaveAttribute('type', 'button');
    });
    it('applies specific type if provided', () => {
        render(<DefaultButton type="submit">Hello</DefaultButton>);
        expect(screen.getAllByRole('button')[0]).toHaveAttribute('type', 'submit');
    });
    it('applies valid attribute to element', () => {
        render(<DefaultButton aria-label="test">Hello</DefaultButton>);
        expect(screen.getAllByRole('button')[0]).toHaveAttribute('aria-label', 'test');
    });
})