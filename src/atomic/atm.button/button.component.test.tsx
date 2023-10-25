import React from 'react';
import {screen, fireEvent, render} from '@testing-library/react-native';
import {ThemeProvider} from 'styled-components/native';
import {commonTheme} from '../obj.theme';
import {Button} from './button.component';
import {TEST_IDS} from '../../app/utils/test.constants';

describe('Button component', () => {
    test('if button is not disabled it should execute onPress', () => {
        const mockFunction = jest.fn();
        const ButtonProps = {
            text: 'press Me',
            onPress: mockFunction,
        };
        render(
            <ThemeProvider theme={commonTheme}>
                <Button.Primary
                    text={ButtonProps.text}
                    onTap={ButtonProps.onPress}
                />
            </ThemeProvider>,
        );

        fireEvent.press(screen.getByText(ButtonProps.text));
        expect(mockFunction).toHaveBeenCalled();
    });
    test('if button is disabled it should not execute onPress', () => {
        const mockFunction = jest.fn();
        const ButtonProps = {
            text: 'press Me',
            onPress: mockFunction,
            disabled: true,
        };
        render(
            <ThemeProvider theme={commonTheme}>
                <Button.Primary
                    text={ButtonProps.text}
                    onTap={ButtonProps.onPress}
                    disabled={ButtonProps.disabled}
                />
            </ThemeProvider>,
        );

        fireEvent.press(screen.getByText(ButtonProps.text));
        expect(mockFunction).toBeCalledTimes(0);
    });
    test('if button is loading it should render loader', () => {
        const mockFunction = jest.fn();
        const ButtonProps = {
            text: 'press Me',
            onPress: mockFunction,
            loading: true,
        };
        render(
            <ThemeProvider theme={commonTheme}>
                <Button.Primary
                    text={ButtonProps.text}
                    onTap={ButtonProps.onPress}
                    loading={ButtonProps.loading}
                />
            </ThemeProvider>,
        );

        fireEvent.press(screen.getByText(ButtonProps.text));
        expect(mockFunction).toBeCalledTimes(0);
        expect(screen.getByTestId(TEST_IDS.LOADING)).toBeTruthy();
    });
    test('if button is loading it should not execute onPress', () => {
        const mockFunction = jest.fn();
        const ButtonProps = {
            text: 'press Me',
            onPress: mockFunction,
            loading: true,
        };
        render(
            <ThemeProvider theme={commonTheme}>
                <Button.Primary
                    text={ButtonProps.text}
                    onTap={ButtonProps.onPress}
                    loading={ButtonProps.loading}
                />
            </ThemeProvider>,
        );

        fireEvent.press(screen.getByText(ButtonProps.text));
        expect(mockFunction).toBeCalledTimes(0);
    });
});
