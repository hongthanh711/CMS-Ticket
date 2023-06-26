import { useState } from 'react'
import IconBell from '../../assets/svg/IconBell'
import IconMail from '../../assets/svg/IconMail'
import Search from '../search/Search'
import avatar from './../../assets/avatar.png'

export default function Header() {
    const [keyword, setKeyword] = useState<string>('')
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setKeyword(e.target.value)
        console.log(keyword)
    }
    return (
        <header className="flex items-center justify-between">
            <Search onChange={handleChange} />
            <div className="flex items-center gap-6">
                <div className="w-6 h-6">
                    <IconMail />
                </div>
                <div className="w-6 h-6">
                    <IconBell />
                </div>
                <div className="w-12 h-12">
                    <img src={avatar} alt="avatar" />
                </div>
            </div>
        </header>
    )
}
