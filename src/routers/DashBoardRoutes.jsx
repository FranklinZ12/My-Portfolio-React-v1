import { Fragment } from "react"
import { Route, Routes } from "react-router-dom"
import Navbar from "../components/Navbar"
import AboutScreen from "../pages/AboutScreen"
import ContactScreen from "../pages/ContactScreen"
import HomeScreen from "../pages/HomeScreen"
import PortfolioScreen from "../pages/PortfolioScreen"
import ResumeScreen from "../pages/ResumeScreen"

const DashBoardRoutes = () => {
    return (
        <Fragment>
            <Navbar/>
            <div className="container">
                <Routes>
                    <Route path="about" element={<AboutScreen />} />
                    <Route path="resume" element={<ResumeScreen />} />
                    <Route path="portfolio" element={<PortfolioScreen />} />
                    <Route path="contact" element={<ContactScreen />} />
                    <Route path="/" element={<HomeScreen />} />
                </Routes>
            </div>
        </Fragment>
    )
}

export default DashBoardRoutes