import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend)

type Props = {
    // data: {
    //     label: string[] | never[]
    //     datasets: [
    //         {
    //             data: number[]
    //             backgroundColor: string[]
    //             borderWidth: number
    //         }
    //     ]
    // }
    data: any
}

export function DoughnutChart({ data }: Props) {
    const options = {
        plugins: {
            tooltip: {
                displayColors: false,
                backgroundColor: '#fff',
                bodyColor: '#000',
                bodyFont: { size: 20 },
            },
        },
    }

    return <Doughnut data={data} options={options} />
}
