export interface fakeStoreProduct {
    category: string;
    description: string;
    id: number;
    image: string;
    price: number;
    rating: ProductRating;
    title: string;
}

interface ProductRating {
    count: number;
    rate: number;
}
