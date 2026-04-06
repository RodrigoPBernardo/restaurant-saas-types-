import { BaseEntity } from '../common/base.js'
import { ReservationStatus } from '../enums/reservationStatus.js'
import { ReservationSource } from '../enums/reservationSource.js'

export interface Reservation extends BaseEntity {
    restaurantId: string
    customerName: string
    phone: string
    numberOfPeople: number
    startTime: Date
    endTime: Date
    status: ReservationStatus
    source: ReservationSource
    assignedTableIds: string[]
}