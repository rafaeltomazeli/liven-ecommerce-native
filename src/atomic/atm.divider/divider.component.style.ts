import styled from 'styled-components/native';

export const DividerGray = styled.View`
    width: 100%;
    height: ${props => props.theme.border.width};
    background-color: ${props => props.theme.color.grayLight};
`;

export const DividerGrayVertical = styled.View`
    width: ${props => props.theme.border.width};
    height: 100%;
    background-color: ${props => props.theme.color.grayLight};
`;
