import Navbar from '../sections/Navbar'
import Footer from '../sections/Footer'
import { Outlet } from 'react-router-dom'

export default function layout() {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}
