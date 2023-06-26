import { onSnapshot } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { CSVLink } from 'react-csv'
import IconFilter from '../../assets/svg/IconFilter'
import Button from '../../component/button/Button'
import Search from '../../component/search/Search'
import { listTicketColection } from '../../lib/firestore-colection'
import { TicketType } from '../../types/TicketType'
import ModalManageTicket from './modules/ModalManageTicket'
import TableManage from './modules/TableManage'

export default function ManageTicket() {
    const [ticketList, setTicketList] = useState<TicketType[] | []>([])
    const [isOpenModal, setIsOpenModal] = useState<boolean>(false)
    const [keyword, setKeyword] = useState<string>('')
    const [dataFilter, setDataFilter] = useState<TicketType[] | []>([])

    const [isLoading, setIsLoading] = useState<boolean>(true)

    useEffect(() => {
        const unb = onSnapshot(listTicketColection, (snapshot) => {
            setTicketList(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    bookingCode: doc.data().bookingCode,
                    ticketCode: doc.data().ticketCode,
                    statusUse: doc.data().statusUse,
                    dateUse: doc.data().dateUse,
                    dateRelease: doc.data().dateRelease,
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
            setDataFilter(ticketList)
        } else {
            const curr = [
                ...ticketList.filter((ticket) => {
                    return ticket.ticketCode.toLowerCase().includes(keyword.toLocaleLowerCase())
                }),
            ]
            setDataFilter(curr)
        }
    }, [keyword, ticketList])

    const handleToggleModal = () => {
        setIsOpenModal(!isOpenModal)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setKeyword(e.target.value)
    }

    return (
        <div className="bg-white w-full h-full rounded-3xl p-6 mt-5">
            <h1 className="title">Danh sách vé</h1>
            <div className="flex items-center justify-between">
                <Search onChange={handleChange} placehoder="Tìm bằng số vé" />
                <div className="flex gap-2">
                    <Button onClick={handleToggleModal} title="Lọc vé" icon={<IconFilter />} />
                    <div className={isLoading ? 'pointer-events-none' : undefined}>
                        <CSVLink data={ticketList} filename="ticket-list.csv" target="_blank">
                            <Button title="Xuất file (.csv)"></Button>
                        </CSVLink>
                    </div>
                </div>
            </div>
            <div className="mt-5">
                <TableManage loading={isLoading} ticketList={dataFilter} />
            </div>
            <ModalManageTicket open={isOpenModal} handleToggleModal={handleToggleModal} />
        </div>
    )
}
