import { NavLink } from 'react-router-dom'
import logo from './../../assets/insight-logo.png'
import IconHome from '../../assets/svg/IconHome'
import { ReactNode } from 'react'
import IconTicket from '../../assets/svg/IconTicket'
import IconInvoice from '../../assets/svg/IconInvoice'
import IconSetting from '../../assets/svg/IconSetting'

type sideBarType = {
    id: string
    title: string
    icon?: ReactNode
    href: string
    child?: sideBarType[]
}

const sideBarData: sideBarType[] = [
    { id: '1', title: 'Trang chủ', icon: <IconHome />, href: '/' },
    { id: '2', title: 'Quản lý vé', icon: <IconTicket />, href: '/manage-ticket' },
    { id: '3', title: 'Đối soát vé', icon: <IconInvoice />, href: '/control-ticket' },
    {
        id: '4',
        title: 'Cài đặt',
        icon: <IconSetting />,
        href: '/setting',
        child: [{ id: '1', title: 'Gói dịch vụ', href: '/setting' }],
    },
]

export default function SideBar() {
    return (
        <div className="fixed top-0 bottom-0">
            <div className="mt-7">
                <div className="w-32">
                    <img src={logo} alt="logo" />
                </div>

                <div className="flex flex-col gap-2 mt-14">
                    {sideBarData.map((nav: sideBarType) => {
                        return (
                            <>
                                <NavLink
                                    to={nav.href}
                                    className={({ isActive }) =>
                                        isActive
                                            ? 'font-bold text-white bg-secondary rounded-lg py-4 px-6'
                                            : 'text-lg opacity-80 py-4 px-6'
                                    }
                                >
                                    <div className="flex items-center gap-2">
                                        <div className="w-6 h-6">{nav.icon}</div>
                                        <p>{nav.title}</p>
                                    </div>
                                </NavLink>
                                {nav.child
                                    ? nav.child.map((child) => {
                                          return (
                                              <NavLink
                                                  key={child.id}
                                                  to={child.href}
                                                  className="pl-20 opacity-80"
                                              >
                                                  {child.title}
                                              </NavLink>
                                          )
                                      })
                                    : ''}
                            </>
                        )
                    })}
                </div>
            </div>
            <p className="text-sm opacity-80 absolute bottom-7 bg-bgColor">
                Copyright 2020 Alta Software
            </p>
        </div>
    )
}
