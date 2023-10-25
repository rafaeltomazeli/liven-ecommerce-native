import {Animated} from 'react-native';
import styled, {css, DefaultTheme} from 'styled-components/native';

import {PulseLoader} from 'react-spinners';
import {ThemeProps} from '../obj.theme';
import {InputValueCss} from '../atm.typography/typography.component.style';

export interface TextFieldStyledProps extends ThemeProps {
    editable?: boolean;
    focus?: boolean;
    center?: boolean;
}

const borderColor: (props: TextFieldStyledProps) => string = ({
    theme,
    focus,
}) => {
    const color = focus ? theme?.color.primary : theme?.border.color;
    return color as string;
};

export const TextFieldWrapperStyled = styled.View<TextFieldStyledProps>`
    position: relative;
    flex-direction: row;
    border-color: ${props => borderColor(props)};
    border-radius: ${({theme}) => theme.border.radius};
    border-width: ${({theme}) => theme.border.width};
    border-style: ${({editable}) => (editable ? 'solid' : 'dashed')};
    align-self: stretch;
    margin-bottom: ${({theme}) => theme.spacing.xSmall}px;
`;

export const TextFieldStyled = styled.TextInput.attrs(({theme}) => ({
    underlineColorAndroid: 'transparent',
    placeholderTextColor: theme.color.grayLight,
    selectionColor: theme.color.primary + theme.color.alpha,
}))<TextFieldStyledProps>`
    flex: 1;
    padding-horizontal: ${({theme}) => theme.spacing.small}px;
    height: ${({theme}) => theme.fieldHeight}px;
    opacity: ${({editable}) => (editable ? 1 : 0.6)};
    ${InputValueCss}
    ${({center}) => center && 'text-align: center;'}
`;

export const TextFieldBorderStyled = styled(Animated.View)<ThemeProps>`
    position: absolute;
    bottom: 0;
    height: 2px;
    background-color: ${({theme}) => theme.color.primary};
`;

export const TextFieldLoadingStyled = styled(PulseLoader).attrs<ThemeProps>(
    ({theme}) => ({
        size: theme.spacing.medium,
    }),
)``;

export const TextFieldLoadingWrapperStyled = styled.View`
    position: absolute;
    top: ${({theme}) => (theme.fieldHeight - theme.spacing.large) / 2}px;
    right: ${({theme}) => theme.spacing.halfGutter}px;
`;
