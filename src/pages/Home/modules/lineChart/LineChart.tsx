// import {
//     Chart as ChartJS,
//     Title,
//     Tooltip,
//     LineElement,
//     Legend,
//     CategoryScale,
//     LinearScale,
//     PointElement,
//     Filler,
// } from 'chart.js'

// import { Line } from 'react-chartjs-2'

// ChartJS.register(
//     Title,
//     Tooltip,
//     LineElement,
//     Legend,
//     CategoryScale,
//     LinearScale,
//     PointElement,
//     Filler
// )

// export default function LineChart() {
//     const options = {
//         responsive: true,
//         plugins: {
//             legend: {
//                 position: 'top' as const,
//             },
//         },
//     }

//     const labels = ['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7', 'CN']

//     const data = {
//         labels,
//         datasets: [
//             {
//                 label: ['line'],
//                 data: [1232, 1214, 1313, 1321, 1321, 1221, 1211],
//                 borderColor: '#FF993C',
//                 backgroundColor: 'rgba(255, 99, 132, 0.5)',
//                 tension: 0.4,
//                 fill: true,
//                 pointStyle: false,
//                 pointBorderColor: 'blue',
//                 pointBackgroundColor: '#fff',
//                 showLine: true,
//             },
//         ],
//     }

//     return <Line options={options} data={data} />
// }

export default function LineChart() {
    return <div>LineChart</div>
}
