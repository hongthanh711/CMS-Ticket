import { Table } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import { TicketType } from '../../../types/TicketType'
import Tag from '../../../component/tag/Tag'
import IconEllipsis from '../../../assets/svg/IconEllipsis'

const columns: ColumnsType<TicketType> = [
    {
        title: 'STT',
        key: 'stt',
        width: 70,
        align: 'center',
        render: (_, __, index) => <p>{index + 1}</p>,
    },
    {
        title: 'Booking code',
        dataIndex: 'bookingCode',
        key: 'bookingCode',
        ellipsis: true,
    },
    {
        title: 'Số vé',
        dataIndex: 'ticketCode',
        key: 'ticketCode',
        ellipsis: true,
    },
    {
        title: 'Tình trạng sử dụng',
        dataIndex: 'statusUse',
        key: 'statusUse',
        render: (text) => {
            if (text === 'used') {
                return <Tag variant="green" title="Chưa sử dụng" />
            } else if (text === 'notUsed') {
                return <Tag variant="grey" title="Đã sử dụng" />
            } else if (text === 'expired') {
                return <Tag variant="red" title="Hết hạn" />
            }
            return <p>{text}</p>
        },
    },
    {
        title: 'Ngày sử dụng',
        dataIndex: 'dateUse',
        key: 'dateUse',
        align: 'right',
    },
    {
        title: 'Ngày xuất vé',
        dataIndex: 'dateRelease',
        key: 'dateRelease',
        align: 'right',
    },
    {
        title: 'Cổng check - in',
        dataIndex: 'gate',
        key: 'gate',
        render: (text) => {
            if (text) {
                return <p>{text}</p>
            }
            return <p>-</p>
        },
    },
    {
        title: '',
        render: () => (
            <div className="w-6 h-6">
                <IconEllipsis />
            </div>
        ),
    },
]

type Props = {
    ticketList: TicketType[]
    loading: boolean
}

const TableManage = ({ ticketList, loading }: Props) => {
    return (
        <Table
            rowClassName={(_, index) => (index % 2 === 0 ? 'table-row-light' : 'table-row-dark')}
            columns={columns}
            dataSource={ticketList}
            pagination={{ position: ['bottomCenter'] }}
            loading={loading}
        />
    )
}

export default TableManage
