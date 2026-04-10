import { RestaurantSettings } from '../entities/restaurant.js';

export interface UpdateRestaurantDTO {
    name?: string;
    address?: string;
    phone?: string;
    email?: string;
    logo_url?: string;
    settings?: RestaurantSettings;
}
