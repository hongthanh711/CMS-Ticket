import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { router } from './router.tsx'
import { RouterProvider } from 'react-router-dom'
// import moment from 'moment'
// import 'moment/locale/vi'

// moment.updateLocale('vi', {
//     lang: {
//         weekdays: 'Chủ nhật_Thứ hai_Thứ ba_Thứ tư_Thứ năm_Thứ sáu_Thứ bảy'.split('_'),
//         weekdaysShort: 'CN_T2_T3_T4_T5_T6_T7'.split('_'),
//         weekdaysMin: 'CN_T2_T3_T4_T5_T6_T7'.split('_'),
//         months: 'Tháng một_Tháng hai_Tháng ba_Tháng tư_Tháng năm_Tháng sáu_Tháng bảy_Tháng tám_Tháng chín_Tháng mười_Tháng mười một_Tháng mười hai'.split(
//             '_'
//         ),
//         monthsShort: 'Th1_Th2_Th3_Th4_Th5_Th6_Th7_Th8_Th9_Th10_Th11_Th12'.split('_'),
//     },
// })

// moment.locale('vi')
// const currentDate = moment()
// console.log(currentDate.format('dddd, DD MMMM YYYY'))

// import dayjs from 'dayjs'
// import 'dayjs/locale/vi'

// dayjs.locale('vi')

// const currentDate = dayjs()
// console.log(currentDate.format('dddd, DD MMMM YYYY')) // Kết quả: "Thứ Ba,

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
