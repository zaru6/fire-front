export interface ProductDTO {
    id: number;
    name: string;
    price: number;
    available: boolean;
    categoryLabel: string;
    subcategoryLabel: string;
    createdBy: string;
    createdAt: Date;
    updatedAt: Date;
}