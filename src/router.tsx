import { createBrowserRouter } from 'react-router-dom'
import MainLayout from './layout/mainLayout'
import ManageTicket from './pages/manageTicket/ManageTicket'
import Setting from './pages/setting/Setting'
import ControlTicket from './pages/controlTicket/ControlTicket'
import PAGE_ROUTE from './constants/pageRoute'
import Home from './pages/home/Home'

export const router = createBrowserRouter([
    {
        path: PAGE_ROUTE.HOME,
        element: <MainLayout />,
        children: [
            {
                path: PAGE_ROUTE.HOME,
                element: <Home />,
            },
            {
                path: PAGE_ROUTE.MANAGE_TICKET,
                element: <ManageTicket />,
            },
            {
                path: PAGE_ROUTE.CONTROL_TICKET,
                element: <ControlTicket />,
            },
            {
                path: PAGE_ROUTE.SETTING,
                element: <Setting />,
            },
        ],
    },
])
