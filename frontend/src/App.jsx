import { Route, Routes } from "react-router-dom"
import { HomePage, NotFound } from "./pages"
import './index.css'
import { ReactLenis } from 'lenis/dist/lenis-react';
import { Navbar } from "./components";


function App() {

  return (
    <>
    <Navbar />
    <ReactLenis root>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path='/*' element={<NotFound/>}/>
      </Routes>
    </ReactLenis>
    </>
  )
}

export default App
