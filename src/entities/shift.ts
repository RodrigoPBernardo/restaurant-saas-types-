import { BaseEntity } from '../common/base.js'

export interface Shift extends BaseEntity {
    restaurant_id: string;
    name: string;
    start_time: string; // HH:MM
    end_time: string;   // HH:MM
    order: number;
}
