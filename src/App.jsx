import { useState } from "react"
import "./App.css"
import Homepage from "./components/homepage/Homepage"
import { BrouserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
      <BrouserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </BrouserRouter>
    </>
  )
}

export default App
