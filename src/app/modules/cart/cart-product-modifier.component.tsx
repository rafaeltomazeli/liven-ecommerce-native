import React from 'react';
import {
    Body,
    DT,
} from '../../../atomic/atm.typography/typography.component.style';
import {HBox, VBox} from '../../../atomic/obj.grid/grid.component.style';
import {Image, TouchableOpacity, View} from 'react-native';
import {Asset} from '../../../atomic/obj.asset/asset.component';
import {
    AddAndRemoveWrapper,
    QuantityWrapper,
} from './cart-item.component.style';

export interface CartProductModifierProps {
    id: string;
    quantity: number;
    onAdd: (id: string) => void;
    onRemove: (id: string) => void;
    onDelete: (id: string) => void;
}

export const CartProductModifier: React.FC<CartProductModifierProps> = ({
    id,
    quantity,
    onAdd,
    onRemove,
    onDelete,
}) => {
    return (
        <HBox>
            <HBox.Item wrap>
                <TouchableOpacity onPress={() => onRemove(id)}>
                    <AddAndRemoveWrapper>
                        <Image source={Asset.Icon.Custom.Remove} />
                    </AddAndRemoveWrapper>
                </TouchableOpacity>
            </HBox.Item>

            <HBox.Item wrap>
                <QuantityWrapper>
                    <Body>{quantity}</Body>
                </QuantityWrapper>
            </HBox.Item>

            <HBox.Item hAlign={'flex-start'} wrap>
                <TouchableOpacity onPress={() => onAdd(id)}>
                    <AddAndRemoveWrapper>
                        <Image source={Asset.Icon.Custom.Add} />
                    </AddAndRemoveWrapper>
                </TouchableOpacity>
            </HBox.Item>
        </HBox>
    );
};
