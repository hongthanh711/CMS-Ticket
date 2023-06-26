import IconCircle from '../../assets/svg/IconCircle'

type Props = {
    title: string
    variant?: 'green' | 'red' | 'grey'
}

export default function Tag({ title, variant = 'green' }: Props) {
    const variantObject = {
        green: 'bg-[#DEF7E0] text-[#03AC00] border-[#03AC00] ',
        grey: 'bg-[#EAF1F8] text-[#919DBA] border-[#919DBA] ',
        red: 'bg-[#F8EBE8] text-[#FD5959] border-[#FD5959] ',
    }

    return (
        <div
            className={`${variantObject[variant]} border-[1px]  inline-block py-2 px-3 rounded text-[12px]`}
        >
            <div className="flex items-center gap-2">
                <div>
                    <IconCircle />
                </div>
                <div>{title}</div>
            </div>
        </div>
    )
}
