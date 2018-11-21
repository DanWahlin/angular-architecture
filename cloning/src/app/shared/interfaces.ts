export interface Customer {
    id: number;
    name: string;
    address: Address;
    orderTotal: number;
    orderTotalWithTax?: number;
}

export interface Address {
    city: string;
}