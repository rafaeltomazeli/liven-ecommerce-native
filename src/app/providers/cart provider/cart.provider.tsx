import React, {PropsWithChildren} from 'react';
import update from 'immutability-helper';
import {CartProduct} from '../../model/cart/cart.model';

export interface CartContextState {
    products: CartProduct[];
    total: number;
    addOrModifyProduct: (product: CartProduct) => void;
    removeProduct: (product: CartProduct) => void;
    modifyOrRemoveProduct: (id: string, quantity: number) => void;
    clearCart: () => void;
}

export const CartContext = React.createContext<CartContextState>(
    {} as CartContextState,
);

export const CartProvider: React.FC<PropsWithChildren> = props => {
    const [products, setProducts] = React.useState<CartProduct[]>([]);
    const [total, setTotal] = React.useState(0);

    const addOrModifyProduct = (product: CartProduct) => {
        const alreadyAddedProduct = products.find(
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

    const addProduct = (product: CartProduct) => {
        const updatedProducts = update(products, {$push: [product]});
        const updatedTotal = total + product.price;

        setProducts(updatedProducts);
        setTotal(updatedTotal);
    };

    const removeProduct = (product: CartProduct) => {
        const indexToRemove = products.findIndex(
            element => element.id === product.id,
        );
        const updatedProducts = update(products, {
            $splice: [[indexToRemove, 1]],
        });
        const updatedTotal = total - product.price;

        setProducts(updatedProducts);
        setTotal(updatedTotal);
    };

    const modifyOrRemoveProduct = (id: string, quantity: number) => {
        const productToModify = products.find(element => element.id === id);
        if (productToModify) {
            if (quantity === 0) {
                removeProduct(productToModify);
            } else {
                modifyQuantity(productToModify.id, quantity);
            }
        }
    };

    const modifyQuantity = (id: string, quantity: number) => {
        const indexToModify = products.findIndex(element => element.id === id);
        const originalPrice =
            products[indexToModify].price * products[indexToModify].quantity;
        const newPrice = products[indexToModify].price * quantity;

        const updatedProducts = update(products, {
            $merge: {[indexToModify]: {quantity, price: newPrice}},
        });

        const updatedTotal = total - originalPrice + newPrice;

        setProducts(updatedProducts);
        setTotal(updatedTotal);
    };

    const clearCart = () => {
        const updatedState = update(products, {$set: []});
        const updatedTotal = 0;

        setProducts(updatedState);
        setTotal(updatedTotal);
    };

    return (
        <CartContext.Provider
            value={{
                products,
                total,
                addOrModifyProduct,
                removeProduct,
                modifyOrRemoveProduct,
                clearCart,
            }}>
            {props.children}
        </CartContext.Provider>
    );
};
