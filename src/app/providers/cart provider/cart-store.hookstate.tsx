import {hookstate, none} from '@hookstate/core';
import {CartProduct} from '../../model/cart/cart.model';
import update from 'immutability-helper';

export interface CartContextState {
    products: CartProduct[];
    total: number;
}

export const cartState = hookstate<CartContextState>({
    products: [],
    total: 0,
});

export const addOrModifyProduct = (product: CartProduct) => {
    const alreadyAddedProduct = cartState.products.value.find(
        element => element.id === product.id,
    );
    if (alreadyAddedProduct) {
        modifyQuantity(
            alreadyAddedProduct.id,
            alreadyAddedProduct.quantity + 1,
        );
    } else {
        addProduct(product);
    }
};

export const modifyOrRemoveProduct = (id: string, quantity: number) => {
    const productToModify = cartState.products.value.find(
        element => element.id === id,
    ) as CartProduct;
    if (productToModify) {
        if (quantity === 0) {
            removeProduct(productToModify);
        } else {
            modifyQuantity(productToModify.id, quantity);
        }
    }
};

export const clearCart = () => {
    const updatedProducts = update(cartState.products.value, {$set: []});
    const updatedTotal = 0;

    cartState.products.set(updatedProducts);
    cartState.total.set(updatedTotal);
};

const addProduct = (product: CartProduct) => {
    const updatedTotal = cartState.total.value + product.price;

    cartState.products.merge([product]);
    cartState.total.set(updatedTotal);
};

export const removeProduct = (product: CartProduct) => {
    const indexToRemove = cartState.products.value.findIndex(
        element => element.id === product.id,
    );
    const updatedTotal = cartState.total.value - product.price;

    cartState.products[indexToRemove].set(none);
    cartState.total.set(updatedTotal);
};

const modifyQuantity = (id: string, quantity: number) => {
    const indexToModify = cartState.products.value.findIndex(
        element => element.id === id,
    );
    const unitPrice =
        cartState.products.value[indexToModify].price /
        cartState.products.value[indexToModify].quantity;
    const newPrice = unitPrice * quantity;

    const updatedTotal =
        cartState.total.value -
        cartState.products.value[indexToModify].price +
        newPrice;

    cartState.products[indexToModify].set(() => ({
        ...cartState.products.value[indexToModify],
        quantity,
        price: newPrice,
    }));
    cartState.total.set(updatedTotal);
};
