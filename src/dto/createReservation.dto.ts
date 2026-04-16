export interface CreateReservationDTO {
    name: string
    phone: string
    date: string
    shift_id: string // UUID reference to shifts table
    people: number
    isVip?: boolean
    tableIds?: string[]
    isManualOverride?: boolean
    time?: string // HH:mm
    notes?: string
}