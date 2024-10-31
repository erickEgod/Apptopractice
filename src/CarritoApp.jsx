import { Navigate, Route, Routes, redirect } from "react-router-dom"
import { NavBar } from "./components/01_navBar/NavBar"
import { HomeScreen } from "./pages/02_HomeScreen/HomeScreen"
import { ProductsProvider } from "./context/ProductsProvider"
import { CarritoProvider } from "./context/CarritoProvider"
import "./CarritoApp.css"
import { AboutScreen } from "./pages/01_AboutScreen/AboutScreen"

export const CarritoApp = () => {
    return (
        <ProductsProvider>
            <CarritoProvider>
                <NavBar></NavBar>
                <Routes>
                    <Route path="/" element={<HomeScreen></HomeScreen>} ></Route>
                    <Route path="/about" element={<AboutScreen></AboutScreen>} ></Route>
                    <Route path="/*" element={<Navigate to="/"></Navigate>} ></Route>
                    
                </Routes>
            </CarritoProvider>
        </ProductsProvider>
    )
}
