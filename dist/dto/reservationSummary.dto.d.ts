export interface DayCount {
    date: string;
    count: number;
}
export interface ReservationSummaryDTO {
    totalReservations: number;
    activeReservations: number;
    reservationsByDay: DayCount[];
    todayReservations: number;
    todayPeople: number;
    todayNoShows: number;
    occupiedTablesCount: number;
    totalTablesCount: number;
}
