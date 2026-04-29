export interface CreateReservationDTO {
    name: string;
    phone: string;
    date: string;
    shift_id: string;
    people: number;
    isVip?: boolean;
    tableIds?: string[];
    isManualOverride?: boolean;
    time?: string;
    notes?: string;
}
