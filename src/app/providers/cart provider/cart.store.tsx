// cartStore.js
import {observable, action, computed, makeObservable} from 'mobx';
import {CartProduct} from '../../model/cart/cart.model';
import update from 'immutability-helper';
import {Component} from 'react';

class CartStore {
    products: CartProduct[] = [];
    total = 0;

    constructor() {
        makeObservable(this, {
            products: observable,
            total: observable,
            removeProduct: action,
            addOrModifyProduct: action,
            modifyOrRemoveProduct: action,
            clearCart: action,
        });
    }

    private addProduct = (product: CartProduct) => {
        const updatedProducts = update(this.products, {$push: [product]});
        const updatedTotal = this.total + product.price;
        this.products = [...updatedProducts];
        this.total = updatedTotal;
    };

    private modifyQuantity = (id: string, quantity: number) => {
        const indexToModify = this.products.findIndex(
            element => element.id === id,
        );
        const originalPrice = this.products[indexToModify].price;
        const newPrice = originalPrice * quantity;

        const updatedProducts = update(this.products, {
            $merge: {[indexToModify]: {quantity, price: newPrice}},
        });

        const updatedTotal = this.total - originalPrice + newPrice;

        this.products = [...updatedProducts];
        this.total = updatedTotal;
    };

    addOrModifyProduct = (product: CartProduct) => {
        const alreadyAddedProduct = this.products.find(
            element => element.id === product.id,
        );
        if (alreadyAddedProduct) {
            this.modifyQuantity(
                alreadyAddedProduct.id,
                alreadyAddedProduct.quantity + 1,
            );
        } else {
            this.addProduct(product);
        }
    };

    removeProduct = (product: CartProduct) => {
        const indexToRemove = this.products.findIndex(
            element => element.id === product.id,
        );
        const updatedProducts = update(this.products, {
            $splice: [[indexToRemove, 1]],
        });
        const updatedTotal = this.total - product.price;

        this.products = [...updatedProducts];
        this.total = updatedTotal;
    };

    modifyOrRemoveProduct = (id: string, quantity: number) => {
        const productToModify = this.products.find(
            element => element.id === id,
        );
        if (productToModify) {
            if (quantity === 0) {
                this.removeProduct(productToModify);
            } else {
                this.modifyQuantity(productToModify.id, quantity);
            }
        }
    };

    clearCart = () => {
        const updatedProducts = update(this.products, {$set: []});
        const updatedTotal = 0;

        this.products = [...updatedProducts];
        this.total = updatedTotal;
    };
}

const cartStore = new CartStore();

export default cartStore;
