import 'jest-styled-components';
import React from 'react';
import {render, screen} from '@testing-library/react';
import {Field} from './Field';

jest.mock('../../utils/useUniqueID');

describe('Field', () => {
    describe('Label', () => {
        it('applies unique ID to htmlFor attribute', () => {
            render(
                <Field>
                    <Field.Label>Label</Field.Label>
                </Field>
            );

            expect(screen.getByText('Label')).toHaveAttribute('for', 'unique-id');
        });
    });

    describe('Input', () => {
        it('applies unique ID to id attribute', () => {
            render(
                <Field>
                    <Field.Label>Input</Field.Label>
                    <Field.Input/>
                </Field>
            );

            expect(screen.getByLabelText('Input')).toHaveAttribute('id', 'unique-id');
        });
    });

    describe('TextArea', () => {
        it('applies unique ID to id attribute', () => {
            render(
                <Field>
                    <Field.Label>Textarea</Field.Label>
                    <Field.TextArea/>
                </Field>
            );

            expect(screen.getByLabelText('Textarea')).toHaveAttribute(
                'id',
                'unique-id'
            );
        });

        it('remove resize ability if provided', () => {
            render(
                <Field>
                    <Field.Label>Textarea</Field.Label>
                    <Field.TextArea isResizable={false}/>
                </Field>
            );

            // @ts-ignore
            expect(screen.getByLabelText('Textarea')).toHaveStyleRule('resize', 'none');
        });
    });
});
