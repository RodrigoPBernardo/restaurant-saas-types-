export enum ShiftType {
  LUNCH_1 = "lunch_1",
  LUNCH_2 = "lunch_2",
  DINNER_1 = "dinner_1",
  DINNER_2 = "dinner_2"
}

export type ReservationStatus = 'confirmed' | 'seated' | 'no_show' | 'cancelled'

export interface Reservation {
    id: string
    name: string
    phone: string
    date: string
    time: string
    shift: ShiftType
    people: number
    status: ReservationStatus
    assignedTableIds?: string[]
    createdAt: string
}