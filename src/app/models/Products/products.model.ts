import {ImageURISource} from 'react-native';

export interface Product {
    name: string;
    description: string;
    id: string;
    imageUrl: ImageURISource;
    price: string;
}
