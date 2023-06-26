import DatePicker from '../../component/datePicker/DatePicker'
import { DoughnutChart } from './modules/doughnutChart/DoughnutChart'
import { LineChart } from './modules/lineChart/LineChart'

export default function Home() {
    const dataDoghnutChart1 = {
        labels: [],
        datasets: [
            {
                data: [13568, 90256],
                backgroundColor: ['#FF8A48', '#4F75FF'],
                borderWidth: 0,
            },
        ],
    }

    const dataDoghnutChart2 = {
        labels: [],
        datasets: [
            {
                data: [13568, 30256],
                backgroundColor: ['#FF8A48', '#4F75FF'],
                borderWidth: 0,
            },
        ],
    }
    return (
        <>
            <h1 className="title">Thống kê</h1>
            <DatePicker />
            <LineChart />
            <div className="flex gap-[100px]">
                <div>Datepicker</div>
                <div className="w-60">
                    <p className="text-center text-grey font-semibold text-[18px]">Gói gia đình</p>
                    <DoughnutChart data={dataDoghnutChart1} />
                </div>
                <div className="w-60">
                    <p className="text-center text-grey font-semibold text-[18px]">Gói sự kiện</p>
                    <DoughnutChart data={dataDoghnutChart2} />
                </div>
                <div>
                    <div className="flex items-center gap-2">
                        <div className="bg-[#4F75FF] w-10 h-5 rounded"></div>
                        <span>Vé đã sử dụng</span>
                    </div>
                    <div className="flex items-center gap-2 mt-4">
                        <div className="bg-[#FF8A48] w-10 h-5 rounded"></div>
                        <span>Vé chưa sử dụng</span>
                    </div>
                </div>
            </div>
        </>
    )
}
