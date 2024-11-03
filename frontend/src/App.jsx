import { Route, Routes } from "react-router-dom"
import { HomePage } from "./pages"
import './index.css'
import { Navbar } from "./components"

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
    </Routes>
    </>
  )
}

export default App
