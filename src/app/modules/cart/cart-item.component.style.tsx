import styled from 'styled-components/native';

export const AddAndRemoveWrapper = styled.View`
    background-color: ${props => props.theme.color.primary};
`;

export const QuantityWrapper = styled.View`
    padding-horizontal: ${props => props.theme.spacing.small}px;
    margin: auto;
`;
