import { Outlet } from 'react-router-dom'
import Header from '../component/header/Header'
import SideBar from '../component/sideBar/SideBar'

export default function MainLayout() {
    return (
        <div className="py-4 px-8 bg-bgColor min-h-[100vh]">
            <div className="flex gap-9">
                <div className="w-[15%]">
                    <SideBar />
                </div>
                <div className="w-[85%]">
                    <Header />
                    <div className="bg-white w-full h-full rounded-3xl p-6 mt-5">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    )
}
