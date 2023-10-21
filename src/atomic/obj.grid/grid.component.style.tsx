import {FlexAlignType} from 'react-native';
import styled from 'styled-components/native';

interface BoxProps {
    hAlign?: FlexAlignType;
    vAlign?:
        | 'flex-start'
        | 'flex-end'
        | 'center'
        | 'space-between'
        | 'space-around'
        | 'space-evenly';
}

interface RootProps {
    bgColor?: boolean;
}

export const Root = styled.View<RootProps>`
    background-color: ${({bgColor, theme}) =>
        bgColor ? theme.color.background : theme.color.white};
    flex: 1;
`;

interface VBoxProps extends BoxProps {
    vGrow?: boolean;
    noGutter?: boolean;
    bgColor?: boolean;
}

export const VBox = styled.View<VBoxProps>`
    justify-content: ${({vAlign}) => vAlign || 'flex-start'};
    align-items: ${({hAlign}) => hAlign || 'stretch'};
    padding-horizontal: ${({noGutter, theme}) =>
        noGutter ? '0' : theme.spacing.gutter}px;
    ${({bgColor, theme}) =>
        bgColor && `background-color: ${theme.color.white};`}
    ${({vGrow}) => vGrow && 'flex-grow: 1;'}
`;

interface SeparatorProps {
    half?: boolean;
}

export const VSeparator = styled.View<SeparatorProps>`
    height: ${({half, theme}) =>
        half ? theme.spacing.halfGutter : theme.spacing.gutter}px;
`;

interface HBoxProps {
    vGrow?: boolean;
}

const HBoxStyled = styled.View<HBoxProps>`
    flex-direction: row;
    align-content: flex-start;
    ${({vGrow}) => vGrow && 'flex-grow: 1;'}
`;

interface HBoxItemProps extends BoxProps {
    wrap?: boolean;
    double?: boolean;
}

const flex = (props: HBoxItemProps) => {
    const isFlex = props.double ? 'flex: 2;' : 'flex: 1;';
    return !props.wrap ? isFlex : '';
};

const HBoxItem = styled.View<HBoxItemProps>`
    ${flex}
    justify-content: ${({vAlign}) => vAlign || 'flex-start'};
    align-items: ${({hAlign}) => hAlign || 'stretch'};
`;

const HBoxSeparator = styled.View<SeparatorProps>`
    width: ${({half, theme}) =>
        half ? theme.spacing.halfGutter : theme.spacing.gutter}px;
`;

type HBoxType = typeof HBoxStyled & {
    Item: typeof HBoxItem;
    Separator: typeof HBoxSeparator;
};

export const HBox = HBoxStyled as HBoxType;
HBox.Item = HBoxItem;
HBox.Separator = HBoxSeparator;
