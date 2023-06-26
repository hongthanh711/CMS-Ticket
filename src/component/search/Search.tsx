import { useState } from 'react'
import IconSearch from '../../assets/svg/IconSearch'

type Props = {
    placehoder?: string
    handleChange: (value: string) => void
}

export default function Search({ placehoder = 'Search', handleChange }: Props) {
    const [value, setValue] = useState<string>('')
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
        handleChange(value)
    }

    return (
        <div>
            <div className="bg-[#EDE6E6] rounded-xl py-2 px-4 flex  items-center justify-between">
                <input
                    onChange={onChange}
                    value={value}
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
