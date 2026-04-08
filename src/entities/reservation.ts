export type ReservationStatus = 'confirmed' | 'seated' | 'no_show' | 'cancelled'

export interface Reservation {
    id: string
    name: string
    phone: string
    date: string
    time: string
    people: number
    status: ReservationStatus
    assignedTableIds?: string[]
    createdAt: string
}