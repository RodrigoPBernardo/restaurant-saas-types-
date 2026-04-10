export enum ShiftType {
  LUNCH_1 = "lunch_1",
  LUNCH_2 = "lunch_2",
  DINNER_1 = "dinner_1",
  DINNER_2 = "dinner_2"
}

export const SHIFT_LABELS: Record<ShiftType, string> = {
  [ShiftType.LUNCH_1]: "12:00",
  [ShiftType.LUNCH_2]: "14:00",
  [ShiftType.DINNER_1]: "19:30",
  [ShiftType.DINNER_2]: "21:30"
};

export const SHIFT_START_TIMES: Record<ShiftType, number> = {
  [ShiftType.LUNCH_1]: 12 * 60,
  [ShiftType.LUNCH_2]: 14 * 60,
  [ShiftType.DINNER_1]: 19 * 60 + 30,
  [ShiftType.DINNER_2]: 21 * 60 + 30
};

export type ReservationStatus = 'confirmed' | 'seated' | 'no_show' | 'cancelled'

export interface Reservation {
  id: string
  name: string
  phone: string
  date: string
  shift: ShiftType
  people: number
  isVip: boolean
  status: ReservationStatus
  tableIds?: string[]
  tableNumbers?: number[]

  expectedArrivalTime?: string // Formato HH:MM para referência futura
  createdAt: string
  restaurant_id: string
}