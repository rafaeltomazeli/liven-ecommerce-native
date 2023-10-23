export interface CartProduct {
    name: string;
    id: string;
    price: number;
    quantity: number;
}

export interface Cart {
    products: CartProduct;
    total: number;
}
