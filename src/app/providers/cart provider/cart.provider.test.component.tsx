import {CartContext, CartProvider} from './cart.provider';
import {useContext} from 'react';
import {Button, View, Text} from 'react-native';
import {render} from '@testing-library/react-native';
import {CartProduct} from '@app/model/cart/cart.model';

export const cartTestIds = {
    add: 'addProduct',
    remove: 'removeProduct',
    modify: 'modifyQuantity',
    modifyZero: 'modifyZero',
    clear: 'clearCart',
    products: 'products',
    total: 'total',
    name: 'name',
    id: 'id',
    price: 'price',
    quantity: 'quantity',
};

export const quantities = {
    initial: 2,
    modify: 5,
    modifyZero: 0,
};

export const testProduct: CartProduct = {
    name: 'testProduct',
    id: '1',
    price: 5.5,
    quantity: quantities.initial,
};

export const TestComponent = () => {
    const {
        products,
        total,
        addOrModifyProduct,
        removeProduct,
        modifyOrRemoveProduct,
        clearCart,
    } = useContext(CartContext);

    return (
        <View>
            <Button
                testID={cartTestIds.add}
                title={cartTestIds.add}
                onPress={() => addOrModifyProduct(testProduct)}
            />
            <Button
                testID={cartTestIds.remove}
                title={cartTestIds.remove}
                onPress={() => removeProduct(testProduct)}
            />
            <Button
                testID={cartTestIds.modify}
                title={cartTestIds.modify}
                onPress={() =>
                    modifyOrRemoveProduct(testProduct.id, quantities.modify)
                }
            />
            <Button
                testID={cartTestIds.modifyZero}
                title={cartTestIds.modifyZero}
                onPress={() =>
                    modifyOrRemoveProduct(testProduct.id, quantities.modifyZero)
                }
            />
            <Button
                testID={cartTestIds.clear}
                title={cartTestIds.clear}
                onPress={() => clearCart()}
            />
            {products.map(product => (
                <>
                    <Text testID={cartTestIds.name} key={product.name}>
                        {product.name}
                    </Text>
                    <Text testID={cartTestIds.id} key={product.id}>
                        {product.id}
                    </Text>
                    <Text testID={cartTestIds.price} key={product.price}>
                        {product.price}
                    </Text>
                    <Text testID={cartTestIds.quantity} key={product.quantity}>
                        {product.quantity}
                    </Text>
                </>
            ))}
            <Text testID={cartTestIds.total}>{total}</Text>
        </View>
    );
};
