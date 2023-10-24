import * as React from 'react';

import {ImageResizeMode, ImageSourcePropType} from 'react-native';
import {
    ThumbnailSizeType,
    ThumbnailSizes,
    ThumbnailStyled,
} from './thumbnail.component.style';

export interface ThumbnailProps {
    source: ImageSourcePropType;
    resizeMode?: ImageResizeMode;
    size?: ThumbnailSizeType;
    round?: boolean;
}

export const Thumbnail: React.FC<ThumbnailProps> = props => (
    <ThumbnailStyled
        source={props.source}
        size={props.size || ThumbnailSizes.medium}
        round={props.round}
        resizeMode={props.resizeMode}
    />
);

Thumbnail.defaultProps = {size: ThumbnailSizes.medium, resizeMode: 'contain'};
