export type TableStatus = 'free' | 'reserved' | 'occupied';
export interface Table {
    id: string;
    number: number;
    capacity: number;
    status: TableStatus;
    restaurant_id: string;
}
