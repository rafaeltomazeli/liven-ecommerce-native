import {Product} from '../models/Products/products.model';
import {fakeStoreProduct} from '../models/fakeStoreApi/fakeStoreApi.model';
import {getErrorMessage} from '../utils/error-message.utils';
import {END_POINTS, fakeStorageApi} from './axios.config';

import {mapProductResponse} from './product.mapper';

export interface ApiResponse<T> {
    data: T;
    error: string | undefined;
}

const fetchData = async (url: string): Promise<ApiResponse<any>> => {
    try {
        const response = await fakeStorageApi.get(url);
        return {data: response.data, error: undefined};
    } catch (error) {
        return {data: null, error: getErrorMessage(error)};
    }
};

export const getProducts = async (): Promise<ApiResponse<Product[]>> => {
    const response = await fetchData(END_POINTS.products);
    return {
        data:
            response.data?.length > 0
                ? response.data?.map((element: fakeStoreProduct) =>
                      mapProductResponse(element),
                  )
                : [],
        error: response.error,
    };
};

export const getProductsDetail = async ({id}: {id?: string} = {}) => {
    if (!id) {
        return {
            data: [],
            error: 'no Id',
        };
    }
    const response = await fetchData(`${END_POINTS.products}/${id}`);
    return {
        data: mapProductResponse(response.data),
        error: response.error,
    };
};

export const getCategories = async () => {
    const response = await fetchData(END_POINTS.categories);
    return {
        data: response.data,
        error: response.error,
    };
};
