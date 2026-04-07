export interface DayCount {
    date: string
    count: number
}

export interface ReservationSummaryDTO {
    totalReservations: number
    activeReservations: number
    reservationsByDay: DayCount[]
}
