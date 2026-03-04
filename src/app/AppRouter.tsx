import { BrowserRouter, Routes, Route } from "react-router-dom"
import  Login from "../Pages/Auth/Login"
import Dashboard from "../Pages/Dashboard-Component/Dashboard"
import ScanDetail from "../Pages/Scan-Details/ScanDetails"
import AppShellLayout from "./AppShellLayout"


function AppRouter() {
    return(
       <BrowserRouter>
       <Routes>
        <Route path ="/" element={<Login/>}/>

<Route path="/" element={<Login />} />

<Route element={<AppShellLayout />}>
  <Route path="/dashboard" element={<Dashboard />} />
  <Route path="/scan/:id" element={<ScanDetail />} />
</Route>
       </Routes>
       </BrowserRouter>
    )
}
export default AppRouter