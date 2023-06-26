import { DatePicker, Radio } from 'antd'
import Button from '../../../component/button/Button'

export default function FilterTicket() {
    return (
        <div className="bg-white rounded-3xl p-6 mt-5 w-[30%]">
            <p className="text-[24px] font-bold leading-[30px]">Lọc vé</p>
            <div className="flex flex-col gap-6 my-8 text-grey">
                <div className="flex">
                    <p className="text-[16px] font-semibold leading-[26px] opacity-80 w-[55%]">
                        Tình trạng đối soát
                    </p>
                    <div>
                        <Radio.Group className="flex flex-col gap-3" defaultValue={'all'}>
                            <Radio value={'all'}>
                                <p className="opacity-70 text-[16px]">Tất cả</p>
                            </Radio>
                            <Radio value={true}>
                                <p className="opacity-70 text-[16px]">Đã đối soát</p>
                            </Radio>
                            <Radio value={false}>
                                <p className="opacity-70 text-[16px]">Chưa đối soát</p>
                            </Radio>
                        </Radio.Group>
                    </div>
                </div>
                <div className="flex">
                    <p className="text-[16px] font-semibold leading-[26px] opacity-80 w-[55%]">
                        Loại vé
                    </p>
                    <div className="opacity-70">Vé cổng</div>
                </div>
                <div className="flex">
                    <p className="text-[16px] font-semibold leading-[26px] opacity-80 w-[55%]">
                        Từ ngày
                    </p>
                    <div>
                        <DatePicker />
                    </div>
                </div>
                <div className="flex">
                    <p className="text-[16px] font-semibold leading-[26px] opacity-80 w-[55%]">
                        Đến ngày
                    </p>
                    <div>
                        <DatePicker />
                    </div>
                </div>
            </div>
            <div className="text-center">
                <Button className="w-[160px]" title="Lọc" />
            </div>
        </div>
    )
}
