import { TicketPackageType } from '../types/TicketType'

const TablePackageTicketData: TicketPackageType[] = [
    {
        id: '1',
        typeTicketCode: 'ALT20210501',
        typeTicketName: 'Gói gia đình',
        dateApply: '14/04/202108:00:00',
        dateExp: '14/04/2021 23:00:00',
        priceTicket: 90000,
        priceCombo: '360.000 VNĐ/4 Vé',
        enable: true,
    },
    {
        id: '2',
        typeTicketCode: 'ALT20210501',
        typeTicketName: 'Gói sự kiện',
        dateApply: '14/04/2021 08:00:00',
        dateExp: '14/04/2021 23:00:00',
        priceTicket: 20000,
        enable: false,
    },
]

export { TablePackageTicketData }
