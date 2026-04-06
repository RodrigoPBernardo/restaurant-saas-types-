import { BaseEntity } from '../common/base.js'

export interface Table extends BaseEntity {
    restaurantId: string
    tableNumber: number
    capacity: number
    combinableWith: string[] // IDs de mesas
}