import { Route, Routes } from "react-router-dom"
import { HomePage } from "./pages"
import './index.css'
import { ReactLenis } from 'lenis/dist/lenis-react';


function App() {

  return (
    <>
    <ReactLenis root>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
      </Routes>
    </ReactLenis>
    </>
  )
}

export default App
