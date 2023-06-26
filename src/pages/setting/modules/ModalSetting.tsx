import { Modal, Select } from 'antd'
import Button from '../../../component/button/Button'

type Props = {
    open: boolean
    handleToggleModal: () => void
}

export default function ModalSetting({ open, handleToggleModal }: Props) {
    const handleChangeSelect = (value: string) => {
        console.log(`selected ${value}`)
    }
    return (
        <Modal footer={null} closable={false} open={open} onCancel={handleToggleModal}>
            <p className="text-center font-bold text-[32px]">Thêm gói vé</p>
            <div className="flex flex-col gap-5 mt-6 mb-10">
                <div>
                    <div className="font-semibold opacity-80 leading-[26px] text-[16px]">
                        Tên gói vé <span className="text-[#FD5959]">*</span>
                    </div>
                    <input
                        className="border-input pr-[200px]"
                        placeholder="Nhập tên gói vé"
                        type="text"
                    />
                </div>
                <div className="flex">
                    <div>
                        <div className="font-semibold opacity-80 leading-[26px] text-[16px]">
                            Ngày áp dụng
                        </div>
                        <div>DatePicker</div>
                    </div>
                    <div>
                        <div className="font-semibold opacity-80 leading-[26px] text-[16px]">
                            Ngày hết hạn
                        </div>
                        <div>DatePicker</div>
                    </div>
                </div>
                <div>
                    <div className="font-semibold opacity-80 leading-[26px] text-[16px]">
                        Giá vé áp dụng
                    </div>
                    <div>Checkbox</div>
                </div>
                <div>
                    <div className="font-semibold opacity-80 leading-[26px] text-[16px]">
                        Tình trạng
                    </div>
                    <div>
                        <Select
                            defaultValue="Đang áp dụng"
                            onChange={handleChangeSelect}
                            options={[
                                { value: true, label: 'Đang áp dụng' },
                                { value: false, label: 'Tắt' },
                            ]}
                        />
                    </div>
                    <div className="text-[12px] italic">
                        <span className="text-[#FD5959]">* </span>
                        <span className="opacity-40">Là thông tin bắt buộc</span>
                    </div>
                </div>
            </div>
            <div className="justify-center flex gap-6">
                <Button onClick={handleToggleModal} title="Huỷ" />
                <Button title="Lưu" variant="secondary" />
            </div>
        </Modal>
    )
}
