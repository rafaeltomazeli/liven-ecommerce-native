import {fakeStoreProduct} from '../model/fakeStoreApi/fakeStoreApi.model';
import {Product} from '../model/products/products.model';
import {formatToBrazilianReal} from '../utils/string.utils';

export const mapProductResponse = (product: fakeStoreProduct): Product => {
    return {
        name: product.title,
        description: product.description,
        id: product.id.toString(),
        imageUrl: {uri: product.image},
        price: formatToBrazilianReal.format(product.price),
    };
};
