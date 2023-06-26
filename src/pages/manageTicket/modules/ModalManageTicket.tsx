import { Checkbox, Col, Modal, Radio, RadioChangeEvent, Row } from 'antd'
import Button from '../../../component/button/Button'
import { CheckboxValueType } from 'antd/es/checkbox/Group'
import { useState } from 'react'

type Props = {
    open: boolean
    handleToggleModal: () => void
}

export default function ModalManageTicket({ open, handleToggleModal }: Props) {
    const [valueRadio, setValueRadio] = useState<string>('all')
    const [valueCheckox, setValueCheckbox] = useState<CheckboxValueType[]>(['all'])

    const onChangeRadio = (e: RadioChangeEvent) => {
        setValueRadio(e.target.value)
    }

    const onChangeCheckbox = (checkedValues: CheckboxValueType[]) => {
        console.log('checked = ', checkedValues)
        setValueCheckbox(checkedValues)
    }

    return (
        <Modal open={open} closable={false} footer={null} onCancel={handleToggleModal}>
            <p className="text-center font-bold text-[32px]">Lọc vé</p>
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
                    <div>
                        <Radio.Group value={valueRadio} onChange={onChangeRadio}>
                            <Radio value={'all'}>Tất cả</Radio>
                            <Radio value={'used'}>Đã sử dụng</Radio>
                            <Radio value={'notUsed'}>Chưa sử dụng</Radio>
                            <Radio value={'expried'}>Hết hạn</Radio>
                        </Radio.Group>
                    </div>
                </div>
                <div>
                    <p className="font-semibold opacity-80 leading-[26px] text-[16px]">
                        Cổng check in
                    </p>
                    <Checkbox.Group
                        style={{ width: '100%' }}
                        onChange={onChangeCheckbox}
                        defaultValue={valueCheckox}
                    >
                        <Row>
                            <Col span={8}>
                                <Checkbox value="all">Tất cả</Checkbox>
                            </Col>
                            <Col span={8}>
                                <Checkbox value="gate1">Cổng 1</Checkbox>
                            </Col>
                            <Col span={8}>
                                <Checkbox value="gate2">Cổng 2</Checkbox>
                            </Col>
                            <Col span={8}>
                                <Checkbox value="gate3">Cổng 3</Checkbox>
                            </Col>
                            <Col span={8}>
                                <Checkbox value="gate4">Cổng 4</Checkbox>
                            </Col>
                            <Col span={8}>
                                <Checkbox value="gate5">Cổng 5</Checkbox>
                            </Col>
                        </Row>
                    </Checkbox.Group>
                </div>
            </div>
            <div className="text-center">
                <Button
                    //  onClick={handleFilter}
                    title="Lọc"
                />
            </div>
        </Modal>
    )
}
