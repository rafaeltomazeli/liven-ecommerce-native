import React from 'react';
import {Product} from '../../model/products/products.model';
import {FlatList} from 'react-native';
import {DividerGray} from '../../../atomic/atm.divider/divider.component.style';
import {
    ProductListItemProps,
    renderProductListItem,
} from './product-list-item.component';

interface ProductListProps {
    products: ProductListItemProps[];
}

export const ProductList: React.FC<ProductListProps> = ({products}) => {
    return (
        <FlatList
            data={products}
            renderItem={renderProductListItem}
            keyExtractor={item => `${item.id}`}
            ItemSeparatorComponent={() => <DividerGray />}
        />
    );
};
