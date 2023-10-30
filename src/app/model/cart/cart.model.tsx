export interface CartProduct {
    name: string;
    id: string;
    price: number;
    quantity: number;
    image: string;
}

export interface Cart {
    products: CartProduct;
    total: number;
}
