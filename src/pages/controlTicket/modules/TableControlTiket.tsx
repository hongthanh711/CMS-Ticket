import { Table } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import { ControlTicketType } from '../../../types/TicketType'

const columns: ColumnsType<ControlTicketType> = [
    {
        title: 'STT',
        key: 'stt',
        width: 70,
        align: 'center',
        render: (_, __, index) => <p>{index + 1}</p>,
    },
    {
        title: 'Số vé',
        dataIndex: 'ticketCode',
        key: 'ticketCode',
        ellipsis: true,
    },
    {
        title: 'Ngày sử dụng',
        dataIndex: 'dateUse',
        key: 'dateUse',
        align: 'right',
    },
    {
        title: 'Tên loại vé',
        dataIndex: 'ticketType',
        key: 'ticketType',
    },
    {
        title: 'Cổng check - in',
        dataIndex: 'gate',
        key: 'gate',
        render: (text) => {
            return <p>{text}</p>
        },
    },
    {
        title: '',
        dataIndex: 'controlled',
        key: 'controlled',
        render: (text) => {
            if (text) {
                return <p className="text-[#FD5959] italic">Đã đối soát</p>
            } else {
                return <p className="italic text-[#A5A8B1]">Chưa đối soát</p>
            }
        },
    },
]

type Props = {
    data: ControlTicketType[] | []
    loading: boolean
}

const TableControl = ({ data, loading }: Props) => (
    <Table
        loading={loading}
        columns={columns}
        dataSource={data}
        pagination={{ position: ['bottomCenter'] }}
    />
)

export default TableControl
