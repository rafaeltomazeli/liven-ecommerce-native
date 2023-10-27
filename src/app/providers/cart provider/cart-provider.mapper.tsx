import {CartProduct} from '../../model/cart/cart.model';
import {Product} from '../../model/products/products.model';

export const mapProductToCartProduct: (
    product: Product,
    quantity?: number,
) => CartProduct = (product, quantity = 1) => {
    return {
        name: product.name,
        id: product.id.toString(),
        price: product.price,
        image: product.imageUrl,
        quantity: quantity,
    };
};
