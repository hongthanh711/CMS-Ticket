import { Modal, Table } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import { useState } from 'react'
import IconEdit from '../../../assets/svg/IconEdit'
import Button from '../../../component/button/Button'
import Tag from '../../../component/tag/Tag'
import { TicketPackageType } from '../../../types/TicketType'

type Props = {
    data: TicketPackageType[] | []
    loading: boolean
}

const TablePackage = ({ data, loading }: Props) => {
    const [isModalUpdate, setIsModalUpdate] = useState<boolean>(false)

    const handleUpdate = (id: string) => {
        setIsModalUpdate(true)
        console.log(id)
    }

    const columns: ColumnsType<TicketPackageType> = [
        {
            title: 'STT',
            key: 'stt',
            width: 70,
            align: 'center',
            render: (_, __, index) => <p>{index + 1}</p>,
        },
        {
            title: 'Mã gói',
            dataIndex: 'typeTicketCode',
            key: 'typeTicketCode',
            ellipsis: true,
        },
        {
            title: 'Tên gói vé',
            dataIndex: 'typeTicketName',
            key: 'typeTicketName',
            ellipsis: true,
        },
        {
            title: 'Ngày áp dụng',
            dataIndex: 'dateApply',
            key: 'dateApply',
            align: 'right',
        },
        {
            title: 'Ngày hết hạn',
            dataIndex: 'dateExp',
            key: 'dateExp',
            align: 'right',
        },
        {
            title: 'Giá vé (VNĐ/Vé)',
            dataIndex: 'priceTicket',
            key: 'priceTicket',
        },
        {
            title: 'Giá Combo (VNĐ/Combo)',
            dataIndex: 'priceCombo',
            key: 'priceCombo',
        },
        {
            title: 'Tình trạng',
            dataIndex: 'enable',
            key: 'enable',
            render: (text) => {
                if (text) {
                    return <Tag title="Đang áp dụng" />
                } else {
                    return <Tag title="Tắt" variant="red" />
                }
            },
        },
        {
            title: '',
            render: (_, record) => (
                <div
                    className="flex items-center gap-1 text-primary cursor-pointer"
                    onClick={() => {
                        handleUpdate(record.id)
                    }}
                >
                    <div className="w-6 h-6">
                        <IconEdit />
                    </div>
                    <div>Cập nhật</div>
                </div>
            ),
        },
    ]

    return (
        <>
            <Table
                columns={columns}
                dataSource={data}
                pagination={{ position: ['bottomCenter'] }}
                loading={loading}
            />
            <Modal
                closable={false}
                footer={null}
                open={isModalUpdate}
                onCancel={() => {
                    setIsModalUpdate(false)
                }}
            >
                <p className="text-center font-bold text-[32px]">Cập nhật thông tin gói vé</p>
                <div className="flex flex-col gap-5 mt-6 mb-10">
                    <div className="flex">
                        <div>
                            <div className="font-semibold opacity-80 leading-[26px] text-[16px]">
                                Từ ngày
                            </div>
                            <div>DatePicker</div>
                        </div>
                        <div>
                            <div className="font-semibold opacity-80 leading-[26px] text-[16px]">
                                Đến ngày
                            </div>
                            <div>DatePicker</div>
                        </div>
                    </div>
                    <div>
                        <p className="font-semibold opacity-80 leading-[26px] text-[16px]">
                            Tình trạng sử dụng
                        </p>
                    </div>
                    <div>
                        <p className="font-semibold opacity-80 leading-[26px] text-[16px]">
                            Cổng check in
                        </p>
                    </div>
                </div>
                <div className="justify-center flex gap-6">
                    <Button title="Huỷ" />
                    <Button title="Lưu" variant="secondary" />
                </div>
            </Modal>
        </>
    )
}

export default TablePackage
