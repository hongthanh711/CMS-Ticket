import { useEffect, useState } from 'react'
import Button from '../../component/button/Button'
import Search from '../../component/search/Search'
import TableControl from './modules/TableControlTiket'
import { ControlTicketType } from '../../types/TicketType'
import { onSnapshot } from 'firebase/firestore'
import { controlTicketColection } from '../../lib/firestore-colection'
import FilterTicket from './modules/FilterTicket'

export default function ControlTicket() {
    const [controlTicket, setControlTicket] = useState<ControlTicketType[] | []>([])
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [keyword, setKeyword] = useState<string>('')
    const [dataFilter, setDataFilter] = useState<ControlTicketType[] | []>([])

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

    useEffect(() => {
        if (keyword === '') {
            setDataFilter(controlTicket)
        } else {
            const curr = [
                ...controlTicket.filter((ticket) => {
                    return ticket.ticketCode.toLowerCase().includes(keyword.toLocaleLowerCase())
                }),
            ]
            setDataFilter(curr)
        }
    }, [keyword, controlTicket])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setKeyword(e.target.value)
    }

    return (
        <div className="flex gap-6 items-stretch">
            <div className="bg-white w-[70%] rounded-3xl p-6 mt-5">
                <h1 className="title">Đối soát vé</h1>
                <div className="flex items-center justify-between">
                    <Search onChange={handleChange} placehoder="Tìm bằng số vé" />
                    <Button title="Chốt đối soát" variant="secondary" />
                </div>
                <div className="mt-5">
                    <TableControl data={dataFilter} loading={isLoading} />
                </div>
            </div>
            <FilterTicket />
        </div>
    )
}
