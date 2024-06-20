import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomeScreen from "./pages/HomeScreen"
import Impressum from "./pages/Impressum"
import PrivacyPolicy from "./pages/PrivacyPolicy"
import PropertyScreen from "./components/propertiyGroups/ColorProperties"
import ColorProperties from "./components/propertiyGroups/ColorProperties"

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/properties' element={<PropertyScreen />} />
        <Route path='/color-background-properties' element={<ColorProperties />} />
        <Route path='/color-background-properties/:id' element={<ColorProperties />} />
        <Route path='/impressum' element={<Impressum />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
