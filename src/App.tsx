import { BrowserRouter, Route, Routes } from "react-router-dom"
// import "./App.css"
import HomeScreen from "./pages/HomeScreen"
import Impressum from "./pages/Impressum"
import PrivacyPolicy from "./pages/PrivacyPolicy"
import PropertyScreen from "./pages/PropertyScreen"

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/properties' element={<PropertyScreen />} />
        <Route path='/impressum' element={<Impressum />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
