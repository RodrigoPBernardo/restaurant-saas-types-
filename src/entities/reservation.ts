export type ReservationStatus = 'confirmed' | 'seated' | 'no_show' | 'cancelled'

export interface Reservation {
  id: string
  name: string
  phone: string
  date: string
  shift_id: string // UUID reference to shifts table
  people: number
  isVip: boolean
  status: ReservationStatus
  tableIds?: string[]
  tableNumbers?: number[]
  isManualOverride?: boolean
  time: string // HH:mm — arrival time within the shift
  notes?: string

  expectedArrivalTime?: string // Formato HH:MM
  createdAt: string
  restaurant_id: string
}