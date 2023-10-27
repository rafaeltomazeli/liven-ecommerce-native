import {ImageSourcePropType} from 'react-native';

export interface CartProduct {
    name: string;
    id: string;
    price: number;
    quantity: number;
    image: ImageSourcePropType;
}

export interface Cart {
    products: CartProduct;
    total: number;
}
