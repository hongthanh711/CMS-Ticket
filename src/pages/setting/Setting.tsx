import { CSVLink } from 'react-csv'
import Button from '../../component/button/Button'
import Search from '../../component/search/Search'
import TablePackage from './modules/TablePackage'
import { useEffect, useState } from 'react'
import ModalSetting from './modules/ModalSetting'
import { TicketPackageType } from '../../types/TicketType'
import { onSnapshot } from 'firebase/firestore'
import { packageTicketColection } from '../../lib/firestore-colection'

export default function Setting() {
    const [isOpenModalAdd, setIsOpenModalAdd] = useState<boolean>(false)
    const [packageTicket, setPackageTicket] = useState<TicketPackageType[] | []>([])
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [keyword, setKeyword] = useState<string>('')
    const [dataFilter, setDataFilter] = useState<TicketPackageType[] | []>([])

    useEffect(() => {
        const unb = onSnapshot(packageTicketColection, (snapshot) => {
            setPackageTicket(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    typeTicketCode: doc.data().typeTicketCode,
                    typeTicketName: doc.data().typeTicketName,
                    dateApply: doc.data().dateApply,
                    dateExp: doc.data().dateExp,
                    priceTicket: doc.data().priceTicket,
                    priceCombo: doc.data().priceCombo,
                    enable: doc.data().enable,
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
            setDataFilter(packageTicket)
        } else {
            const curr = [
                ...packageTicket.filter((ticket) => {
                    return ticket.typeTicketCode.toLowerCase().includes(keyword.toLocaleLowerCase())
                }),
            ]
            setDataFilter(curr)
        }
    }, [keyword, packageTicket])

    const handleToggleModalAdd = () => {
        setIsOpenModalAdd(!isOpenModalAdd)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setKeyword(e.target.value)
    }

    return (
        <div className="bg-white w-full h-full rounded-3xl p-6 mt-5">
            <h1 className="title">Danh sách gói vé</h1>
            <div className="flex items-center justify-between">
                <Search onChange={handleChange} placehoder="Tìm bằng số vé" />
                <div className="flex gap-2">
                    <div className={isLoading ? 'pointer-events-none' : undefined}>
                        <CSVLink
                            data={packageTicket}
                            filename="ticket-package-list.csv"
                            target="_blank"
                        >
                            <Button title="Xuất file (.csv)"></Button>
                        </CSVLink>
                    </div>
                    <Button
                        onClick={handleToggleModalAdd}
                        title="Thêm gói vé"
                        variant="secondary"
                    />
                </div>
            </div>
            <div className="mt-5">
                <TablePackage data={dataFilter} loading={isLoading} />
            </div>
            <ModalSetting open={isOpenModalAdd} handleToggleModal={handleToggleModalAdd} />
        </div>
    )
}
