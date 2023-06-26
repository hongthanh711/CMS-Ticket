type TicketType = {
    id: string
    bookingCode: string
    ticketCode: string
    statusUse: 'used' | 'notUsed' | 'expired'
    dateUse: string | null
    dateRelease: string
    gate: string | null
}

type ControlTicketType = {
    id: string
    bookingCode: string
    ticketCode: string
    controlled: boolean
    dateUse: string
    ticketType: string
    gate: string
}

type TicketPackageType = {
    id: string
    typeTicketCode: string
    typeTicketName: string
    dateApply: string
    dateExp: string
    priceTicket: number
    priceCombo?: number | string
    enable: boolean
}

export type { TicketType, ControlTicketType, TicketPackageType }
