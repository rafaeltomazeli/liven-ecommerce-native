import styled from 'styled-components/native';

export enum ThumbnailSizes {
    xSmall = 'xSmall',
    small = 'small',
    medium = 'medium',
    large = 'large',
    rectangle = 'rectangle',
}

export type ThumbnailSizeType = keyof typeof ThumbnailSizes;

interface ThumbnailStyledProps {
    size: ThumbnailSizeType;
    round?: boolean;
}

export const ThumbnailSize: Record<
    ThumbnailSizeType,
    {width: string; height: string}
> = {
    xSmall: {width: '24px%', height: '24'},
    small: {width: '48px', height: '48px'},
    medium: {width: '72px', height: '72px'},
    large: {width: '120px', height: '120px'},
    rectangle: {width: '64px', height: '48px'},
};

export const ThumbnailStyled = styled.Image<ThumbnailStyledProps>`
    width: ${props => ThumbnailSize[props.size].width};
    height: ${props => ThumbnailSize[props.size].height};
    ${props =>
        props.round && `border-radius: ${ThumbnailSize[props.size].width};`}
`;
