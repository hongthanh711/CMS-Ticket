import { createBrowserRouter } from 'react-router-dom'
import PAGE_ROUTE from './constants/pageRoute'
import Home from './pages/Home/Home'

export const router = createBrowserRouter([
    {
        path: PAGE_ROUTE.HOME,
        element: <Home />,
    },
])
