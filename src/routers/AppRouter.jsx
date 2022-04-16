import { Routes, Route, BrowserRouter } from "react-router-dom";
import {PublicRoute} from "./PublicRoute";
import DashBoardRoutes from "./DashBoardRoutes";

const AppRouter = () => {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/*" element=
                  {
                    <PublicRoute>
                        <DashBoardRoutes />
                    </PublicRoute> 
                  }
              />
          </Routes>
      </BrowserRouter >
  )
}

export default AppRouter