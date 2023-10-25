import React from 'react';
import {
    ImageSourcePropType,
    ListRenderItemInfo,
    TouchableOpacity,
} from 'react-native';
import {
    DD,
    DT,
} from '../../../atomic/atm.typography/typography.component.style';
import {
    VBox,
    VSeparator,
    HBox,
} from '../../../atomic/obj.grid/grid.component.style';
import {Thumbnail} from '../../../atomic/atm.thumbnail/thumbnail.component';

export interface ProductListItemProps {
    name: string;
    id: string;
    price: string;
    image: ImageSourcePropType;
    onItemTap: (id: string) => void;
}
export const renderProductListItem = ({
    item,
    index,
}: ListRenderItemInfo<ProductListItemProps>) => (
    <VBox>
        <TouchableOpacity onPress={() => item.onItemTap(item.id)}>
            <VSeparator />
            <HBox>
                <HBox.Item hAlign={'flex-start'} vAlign="center" wrap>
                    <Thumbnail source={item.image} />
                </HBox.Item>
                <HBox.Separator />
                <HBox.Item vAlign="center">
                    <DT>{item.name}</DT>
                    <DD>{item.price}</DD>
                </HBox.Item>
            </HBox>
            <VSeparator />
        </TouchableOpacity>
    </VBox>
);
