export interface CreateReservationDTO {
    restaurantId: string
    customerName: string
    phone: string
    numberOfPeople: number
    startTime: Date
    endTime?: Date
}