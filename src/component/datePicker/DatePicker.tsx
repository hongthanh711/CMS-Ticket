import { DatePickerProps } from 'antd'
import { DatePicker as DatePickerAntd, Space, ConfigProvider } from 'antd'

import './style.scss'

import 'moment/locale/en-gb'
import locale from 'antd/es/locale/en_GB'
import moment from 'moment'

moment.updateLocale('en-gb', {
    week: {
        dow: 1, /// Date offset
    },
})

// import dayjs from 'dayjs'
// import 'dayjs/locale/vi'

// dayjs.locale('vi')

// const currentDate = dayjs()
// console.log(currentDate.format('dddd, DD MMMM YYYY')) // Kết quả: "Thứ Ba,

const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString)
}

const DatePicker: React.FC = () => (
    <ConfigProvider locale={locale}>
        <Space direction="vertical" className="date-picker">
            <DatePickerAntd onChange={onChange} />
            <DatePickerAntd onChange={onChange} picker="week" />
        </Space>
    </ConfigProvider>
)

export default DatePicker
