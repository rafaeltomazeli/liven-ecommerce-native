import styled, {css} from 'styled-components/native';

import {TextProps, TextVariant} from './text.variant.component';

export const HDisplay = styled.Text`
    color: ${props => props.theme.color.black};
    font-size: ${props => props.theme.fontSize.large};
`;

export const H1 = styled.Text`
    color: ${props => props.theme.color.black};
    font-size: ${props => props.theme.fontSize.small};
    margin-bottom: ${props => props.theme.spacing.small}px;
    margin-top: ${props => props.theme.spacing.small}px;
    text-transform: uppercase;
`;

export const H2 = styled.Text`
    color: ${props => props.theme.color.black};
    font-size: ${props => props.theme.fontSize.large};
    margin-bottom: ${props => props.theme.spacing.small}px;
    margin-top: ${props => props.theme.spacing.small}px;
    text-transform: uppercase;
`;

interface TitleProps {
    mb?: boolean;
}

export const H3 = styled.Text<TitleProps>`
    color: ${props => props.theme.color.black};
    font-size: ${props => props.theme.fontSize.medium};
    font-weight: bold;
    ${props => props.mb && `margin-bottom: ${props.theme.spacing.xSmall}px;`}
`;

export const H4 = styled.Text<TitleProps>`
    color: ${props => props.theme.color.grayXDark};
    font-size: ${props => props.theme.fontSize.medium};
    ${props => props.mb && `margin-bottom: ${props.theme.spacing.xSmall}px;`}
`;

export const Body = styled.Text<TextProps>`
    color: ${props =>
        props.variant
            ? TextVariant(props.theme)[props.variant]
            : props.theme.color.black};
    font-size: ${props => props.theme.fontSize.small};
    ${props => props.center && 'text-align: center;'}
`;

export const BodySecondary = styled.Text<TextProps>`
    color: ${props =>
        props.variant
            ? TextVariant(props.theme)[props.variant]
            : props.theme.color.grayDark};
    font-size: ${props => props.theme.fontSize.xSmall};
    ${props => props.center && 'text-align: center;'}
`;

interface InputLabelProps {
    hasError?: boolean;
}

export const InputLabel = styled.Text<InputLabelProps>`
    color: ${props =>
        props.hasError ? props.theme.color.alert : props.theme.color.grayXDark};
    font-size: ${props => props.theme.fontSize.small};
    margin-bottom: ${props => props.theme.spacing.xSmall}px;
`;

export const InputValueCss = css`
    color: ${props => props.theme.color.black};
    font-size: ${props => props.theme.fontSize.small};
`;

export const InputValue = styled.Text`
    ${InputValueCss}
`;

export const InputDisabled = styled.Text`
    ${InputValueCss}
    color: ${props => props.theme.color.disabled};
`;

export const InputPlaceholder = styled.Text`
    ${InputValueCss}
    color: ${props => props.theme.color.disabled};
`;

export const InputCaption = styled.Text`
    color: ${props => props.theme.color.grayXDark};
    font-size: ${props => props.theme.fontSize.xSmall};
    margin-top: ${props => props.theme.spacing.xSmall}px;
`;

export const InputCaptionError = styled(InputCaption)`
    color: ${props => props.theme.color.alert};
`;

export const DT = styled.Text`
    color: ${props => props.theme.color.grayXDark};
    font-size: ${props => props.theme.fontSize.small};
`;

export const DD = styled.Text`
    color: ${props => props.theme.color.black};
    font-size: ${props => props.theme.fontSize.medium};
`;
