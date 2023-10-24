import styled from 'styled-components/native';

import {PulseLoader} from 'react-spinners';

import {ThemeProps} from '../obj.theme';

export enum ButtonType {
    primary = 'primary',
    secondary = 'secondary',
    callToAction = 'callToAction',
    alert = 'alert',
    success = 'success',
}

export type ButtonAllowedTypes = keyof typeof ButtonType;

export interface ButtonColorProps {
    outlined?: boolean;
    variant: ButtonAllowedTypes;
}

export interface ButtonStyledProps {
    disabled?: boolean;
    loading?: boolean;
    expanded?: boolean;
}

export const ButtonThumbStyled = styled.Image<ButtonColorProps>`
    width: ${props => props.theme.iconSize.small}px;
    height: ${props => props.theme.iconSize.small}px;
    margin-right: ${props => props.theme.spacing.small}px;
    tint-color: ${props =>
        props.outlined
            ? props.theme.color[props.variant]
            : props.theme.color.white};
`;

export const ButtonStyled = styled.View<ButtonStyledProps>`
    opacity: ${props =>
        props.disabled || props.loading ? props.theme.opacity.disabled : 1};
    justify-content: center;
    align-items: center;
    align-self: ${props => (props.expanded ? 'stretch' : 'auto')};
`;

interface ButtonTouchableOpacityStyledProps extends ButtonColorProps {
    expanded?: boolean;
}

export const ButtonTouchableOpacityStyled = styled.TouchableOpacity.attrs(
    ({theme}) => ({
        activeOpacity: theme.opacity.active,
    }),
)<ButtonTouchableOpacityStyledProps>`
    background-color: ${props =>
        props.outlined ? 'transparent' : props.theme.color[props.variant]};
    border-color: ${props =>
        props.outlined
            ? props.theme.color[props.variant]
            : props.theme.color.white};
    border-radius: ${props => props.theme.border.radius};
    border-width: ${props => props.theme.border.width};
    align-self: ${props => (props.expanded ? 'stretch' : 'auto')};
    height: ${props => props.theme.button.height}px;
    justify-content: center;
    align-items: center;
    padding-horizontal: ${props => props.theme.spacing.medium}px;
`;

export const ButtonTextStyled = styled.Text<ButtonColorProps>`
    color: ${props =>
        props.outlined
            ? props.theme.color[props.variant]
            : props.theme.color.white};
    text-align: center;
    font-size: ${props => props.theme.fontSize.xSmall};
    font-family: ${props => props.theme.fontFamily.primary.bold};
`;

interface ButtonContentStyledProps {
    loading?: boolean;
}

export const ButtonContentStyled = styled.View<ButtonContentStyledProps>`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    overflow: ${props => (props.loading ? 'hidden' : 'visible')};
    opacity: ${props => (props.loading ? 0 : 1)};
`;

interface ButtonSpinnerStyledProps extends ThemeProps {
    outlined?: boolean;
    buttonVariant: ButtonAllowedTypes;
}

export const ButtonSpinnerStyled = styled(
    PulseLoader,
).attrs<ButtonSpinnerStyledProps>(props => ({
    size: props.theme?.button.iconSize,
    color: props.outlined
        ? props.theme?.color[props.buttonVariant]
        : props.theme?.color.white,
}))``;

export const ButtonSpinnerWrapperStyled = styled.View`
    position: absolute;
    top: ${props =>
        (props.theme.button.height - props.theme.button.iconSize) / 2}px;
`;
