export interface Product {
    id: number;
    name: string;
    price: number;
    subcategoryId: number;
    available: boolean;
    createdBy: number;
    createdAt: Date;
    updatedAt: Date;
}