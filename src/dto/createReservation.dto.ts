import { ShiftType } from "../entities/reservation.js";

export interface CreateReservationDTO {
    name: string
    phone: string
    date: string
    shift: ShiftType
    people: number
    isVip?: boolean
    tableIds?: string[]

}