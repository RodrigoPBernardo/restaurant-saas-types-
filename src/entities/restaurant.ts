import { BaseEntity } from '../common/base.js'

export interface Restaurant extends BaseEntity {
    name: string
    timezone: string
    defaultReservationDurationMinutes: number
}