import * as React from 'react';

import {NavigationPageFC} from '../../model/navigation/navigation.model';
import {
    BodySecondary,
    H2,
} from '../../../atomic/atm.typography/typography.component.style';
import {
    Root,
    VBox,
    VSeparator,
} from '../../../atomic/obj.grid/grid.component.style';
import {PageName} from '../page-name.constants';
import {CartContext} from '../../providers/cart provider/cart.provider';
import {CartItem} from './cart-item.component';
import {formatToBrazilianReal} from '../../utils/string.utils';
import {DividerGray} from '../../../atomic/atm.divider/divider.component.style';
import {ScrollView} from 'react-native';

const CartPage: NavigationPageFC = () => {
    const {
        products,
        total,
        addOrModifyProduct,
        removeProduct,
        modifyOrRemoveProduct,
    } = React.useContext(CartContext);

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
                                        image={product.image}
                                        quantity={product.quantity}
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
                        {total ? (
                            <VBox hAlign={'flex-end'}>
                                <BodySecondary>
                                    {formatToBrazilianReal.format(total)}
                                </BodySecondary>
                            </VBox>
                        ) : (
                            <></>
                        )}
                    </VBox>
                </VBox>
            </ScrollView>
        </Root>
    );
};

CartPage.options = {
    name: PageName.CART,
};
export default CartPage;
