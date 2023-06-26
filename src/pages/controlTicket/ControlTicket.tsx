import { useEffect, useState } from 'react'
import Button from '../../component/button/Button'
import Search from '../../component/search/Search'
import TableControl from './modules/TableControlTiket'
import { ControlTicketType } from '../../types/TicketType'
import { onSnapshot } from 'firebase/firestore'
import { controlTicketColection } from '../../lib/firestore-colection'

export default function ControlTicket() {
    const [controlTicket, setControlTicket] = useState<ControlTicketType[] | []>([])
    const [isLoading, setIsLoading] = useState<boolean>(true)

    useEffect(() => {
        const unb = onSnapshot(controlTicketColection, (snapshot) => {
            setControlTicket(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    bookingCode: doc.data().bookingCode,
                    ticketCode: doc.data().ticketCode,
                    controlled: doc.data().controlled,
                    dateUse: doc.data().dateUse,
                    ticketType: doc.data().ticketType,
                    gate: doc.data().gate,
                }))
            )
            setIsLoading(false)
        })
        return () => {
            unb
        }
    }, [])

    const handleChange = (value: string) => {
        console.log(value)
    }

    return (
        <div>
            <h1 className="title">Đối soát vé</h1>
            <div className="flex items-center justify-between">
                <Search handleChange={handleChange} placehoder="Tìm bằng số vé" />
                <Button title="Chốt đối soát" variant="secondary" />
            </div>
            <div className="mt-5">
                <TableControl data={controlTicket} loading={isLoading} />
            </div>
        </div>
    )
}
