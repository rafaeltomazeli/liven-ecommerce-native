import {fakeStoreProduct} from 'app/models/fakeStoreApi/fakeStoreApi.model';
import {Product} from 'app/models/Products/products.model';
import {formatToBrazilianReal} from 'app/utils/string.utils';

export const mapProductResponse = (product: fakeStoreProduct): Product => {
    return {
        name: product.title,
        description: product.description,
        id: product.id.toString(),
        imageUrl: {uri: product.image},
        price: formatToBrazilianReal.format(product.price),
    };
};
