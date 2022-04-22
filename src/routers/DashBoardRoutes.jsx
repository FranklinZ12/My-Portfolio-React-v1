import ByMy from "components/ByMy"
import { Fragment } from "react"
import { Route, Routes } from "react-router-dom"
import Navbar from "../components/Navbar"
import AboutScreen from "../pages/AboutScreen"
import ContactScreen from "../pages/ContactScreen"
import PortfolioScreen from "../pages/PortfolioScreen"
import ResumeScreen from "../pages/ResumeScreen"

const DashBoardRoutes = () => {
    return (
        <Fragment>
            <Navbar/>
            <div>
                <Routes>
                    <Route path="about" element={<AboutScreen />} />
                    <Route path="resume" element={<ResumeScreen />} />
                    <Route path="portfolio" element={<PortfolioScreen />} />
                    <Route path="contact" element={<ContactScreen />} />
                </Routes>
            </div>
            <ByMy />
        </Fragment>
    )
}

export default DashBoardRoutes