export type ReservationStatus = 'confirmed' | 'seated' | 'no_show' | 'cancelled';
export interface Reservation {
    id: string;
    name: string;
    phone: string;
    date: string;
    shift_id: string;
    people: number;
    isVip: boolean;
    status: ReservationStatus;
    tableIds?: string[];
    tableNumbers?: number[];
    isManualOverride?: boolean;
    time: string;
    notes?: string;
    expectedArrivalTime?: string;
    createdAt: string;
    restaurant_id: string;
}
