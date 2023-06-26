import IconSearch from '../../assets/svg/IconSearch'

type Props = {
    placehoder?: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function Search({ placehoder = 'Search', onChange }: Props) {
    return (
        <div>
            <div className="bg-[#EDE6E6] rounded-xl py-2 px-4 flex  items-center justify-between">
                <input
                    onChange={onChange}
                    type="text"
                    placeholder={placehoder}
                    className="bg-transparent focus-visible:outline-none w-[400px] placeholder:italic"
                />
                <div className="w-6 h-6 cursor-pointer">
                    <IconSearch />
                </div>
            </div>
        </div>
    )
}
