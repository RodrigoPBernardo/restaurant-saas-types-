import { BaseEntity } from '../common/base.js';
export interface RestaurantShift {
    start: string;
    end: string;
}
export interface RestaurantSettings {
    shifts: Record<string, RestaurantShift>;
}
export interface Restaurant extends BaseEntity {
    name: string;
    address?: string;
    phone?: string;
    email?: string;
    logo_url?: string;
    settings: RestaurantSettings;
}
