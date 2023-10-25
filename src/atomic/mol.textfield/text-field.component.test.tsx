import React from 'react';
import {screen, render, userEvent} from '@testing-library/react-native';
import {ThemeProvider} from 'styled-components/native';
import {commonTheme} from '../obj.theme';
import {TextField} from './text-field.component';
import {TEST_IDS} from '../../app/utils/test.constants';

describe('Button component', () => {
    test('if text has been submited it should call onSubmit props function with new text', async () => {
        const mockFunction = jest.fn();
        const TextFieldProps = {
            newValue: 'newValue',
            handleSubmit: mockFunction,
            placeholder: 'test me',
        };
        render(
            <ThemeProvider theme={commonTheme}>
                <TextField
                    testID="pudim"
                    placeholder={TextFieldProps.placeholder}
                    onSubmit={mockFunction}
                />
            </ThemeProvider>,
        );

        const input = screen.getByPlaceholderText(TextFieldProps.placeholder);
        await userEvent.type(input, TextFieldProps.newValue, {
            submitEditing: true,
        });
        expect(mockFunction).toBeCalledWith(TextFieldProps.newValue);
    });
    test('if TextField is disabled it shouldnt change the value of text', async () => {
        const mockFunction = jest.fn();
        const TextFieldProps = {
            newValue: 'newValue',
            handleSubmit: mockFunction,
            editable: false,
            placeholder: 'test me',
        };
        render(
            <ThemeProvider theme={commonTheme}>
                <TextField
                    placeholder={TextFieldProps.placeholder}
                    onSubmit={mockFunction}
                    editable={TextFieldProps.editable}
                />
            </ThemeProvider>,
        );

        const input = screen.getByPlaceholderText(TextFieldProps.placeholder);
        await userEvent.type(input, TextFieldProps.newValue, {
            submitEditing: true,
        });
        expect(mockFunction).toBeCalledTimes(0);
    });
    test('if TextField is loading it shouldnt change the value of text', async () => {
        const mockFunction = jest.fn();
        const TextFieldProps = {
            newValue: 'newValue',
            handleSubmit: mockFunction,
            loading: true,
            placeholder: 'test me',
        };
        render(
            <ThemeProvider theme={commonTheme}>
                <TextField
                    placeholder={TextFieldProps.placeholder}
                    onSubmit={mockFunction}
                    loading={TextFieldProps.loading}
                />
            </ThemeProvider>,
        );

        const input = screen.getByPlaceholderText(TextFieldProps.placeholder);
        await userEvent.type(input, TextFieldProps.newValue, {
            submitEditing: true,
        });
        expect(mockFunction).toBeCalledTimes(0);
    });
    test('if TextField is loading it shouldnt render loading component', () => {
        const mockFunction = jest.fn();
        const TextFieldProps = {
            handleSubmit: mockFunction,
            loading: true,
            placeholder: 'test me',
        };
        render(
            <ThemeProvider theme={commonTheme}>
                <TextField
                    placeholder={TextFieldProps.placeholder}
                    onSubmit={mockFunction}
                    loading={TextFieldProps.loading}
                />
            </ThemeProvider>,
        );

        expect(screen.getByTestId(TEST_IDS.LOADING)).toBeTruthy();
    });
});
