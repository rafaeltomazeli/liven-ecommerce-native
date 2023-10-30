import * as React from 'react';

import {NavigationPageFC} from '../../model/navigation/navigation.model';
import {
    Body,
    BodySecondary,
    H2,
} from '../../../atomic/atm.typography/typography.component.style';
import {
    Root,
    VBox,
    VSeparator,
} from '../../../atomic/obj.grid/grid.component.style';
import {PageName} from '../page-name.constants';
import {CartItem} from './cart-item.component';
import {formatToBrazilianReal} from '../../utils/string.utils';
import {DividerGray} from '../../../atomic/atm.divider/divider.component.style';
import {ScrollView} from 'react-native';
import {useHookstate} from '@hookstate/core';
import {
    addOrModifyProduct,
    cartState,
    modifyOrRemoveProduct,
    removeProduct,
} from '../../providers/cart provider/cart-store.hookstate';
import {CartProduct} from '../../model/cart/cart.model';

const CartPage: NavigationPageFC = () => {
    const cartStore = useHookstate(cartState);
    const {products, total} = cartStore.get();

    return (
        <Root bgColor>
            <ScrollView>
                <VBox>
                    <VSeparator />
                    <H2>{'Carrinho'}</H2>
                    <VSeparator />
                    <VBox bgColor>
                        {products?.length > 0 ? (
                            products.map((product, index) => (
                                <>
                                    <CartItem
                                        name={product.name}
                                        id={product.id}
                                        image={{uri: product.image}}
                                        quantity={product.quantity}
                                        price={product.price}
                                        onAdd={() =>
                                            addOrModifyProduct(product)
                                        }
                                        onRemove={() =>
                                            modifyOrRemoveProduct(
                                                product.id,
                                                product.quantity - 1,
                                            )
                                        }
                                        onDelete={() => removeProduct(product)}
                                    />
                                    {index < products?.length - 1 && (
                                        <DividerGray />
                                    )}
                                </>
                            ))
                        ) : (
                            <>
                                <VSeparator />
                                <BodySecondary>
                                    Ainda não há produtos adicionados, tire um
                                    tempinho para conferir a nossa loja
                                </BodySecondary>
                                <VSeparator />
                            </>
                        )}
                    </VBox>
                    <VSeparator />
                    {total > 0 ? (
                        <VBox hAlign={'flex-end'} bgColor>
                            <Body>
                                {`total do carrinho: ${formatToBrazilianReal.format(
                                    total,
                                )}`}
                            </Body>
                        </VBox>
                    ) : (
                        <></>
                    )}
                </VBox>
            </ScrollView>
        </Root>
    );
};

CartPage.options = {
    name: PageName.CART,
};
export default CartPage;
