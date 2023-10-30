import React from 'react';
import {Thumbnail} from '../../../atomic/atm.thumbnail/thumbnail.component';
import {
    DT,
    DD,
} from '../../../atomic/atm.typography/typography.component.style';
import {
    VBox,
    VSeparator,
    HBox,
} from '../../../atomic/obj.grid/grid.component.style';
import {ImageSourcePropType, TouchableOpacity, Image} from 'react-native';
import {CartProductModifier} from './cart-product-modifier.component';
import {Asset} from '../../../atomic/obj.asset/asset.component';
import {DividerGray} from '../../../atomic/atm.divider/divider.component.style';
import {formatToBrazilianReal} from '../../utils/string.utils';

export interface CartItemProps {
    name: string;
    id: string;
    image: ImageSourcePropType;
    quantity: number;
    price: number;
    onAdd: (id: string) => void;
    onRemove: (id: string) => void;
    onDelete: (id: string) => void;
}

export const CartItem: React.FC<CartItemProps> = ({
    name,
    id,
    image,
    quantity,
    price,
    onAdd,
    onRemove,
    onDelete,
}) => {
    return (
        <VBox>
            <VSeparator />
            <HBox>
                <HBox.Item>
                    <HBox>
                        <HBox.Item wrap>
                            <Thumbnail source={image} />
                        </HBox.Item>
                        <HBox.Separator />
                        <HBox.Item
                            vAlign="center"
                            style={{marginBottom: 'auto', marginTop: 'auto'}}>
                            <DT>{name}</DT>
                        </HBox.Item>
                        <HBox.Separator />
                        <HBox.Item hAlign="flex-start" vAlign="flex-start">
                            <DT>qtd</DT>
                            <VSeparator half />
                            <CartProductModifier
                                id={id}
                                quantity={quantity}
                                onAdd={onAdd}
                                onRemove={onRemove}
                                onDelete={onDelete}
                            />
                            <VSeparator half />
                            <DD>{formatToBrazilianReal.format(price)}</DD>
                        </HBox.Item>
                    </HBox>
                </HBox.Item>

                <HBox.Item hAlign="flex-end" vAlign="center" wrap>
                    <TouchableOpacity onPress={() => onDelete(id)}>
                        <Image source={Asset.Icon.Custom.Delete} />
                    </TouchableOpacity>
                </HBox.Item>
            </HBox>
            <VSeparator />
        </VBox>
    );
};
