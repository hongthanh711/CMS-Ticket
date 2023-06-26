import { Outlet } from 'react-router-dom'
import SideBar from '../component/sideBar/SideBar'
import Header from '../component/header/Header'

export default function MainLayout() {
    return (
        <div className="py-4 px-8 bg-bgColor min-h-[100vh]">
            <div className="flex gap-1">
                <div className="w-[15%]">
                    <SideBar />
                </div>
                <div className="w-[85%]">
                    <Header />
                    <Outlet />
                </div>
            </div>
        </div>
    )
}
