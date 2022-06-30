import { useState } from "react"
import "./App.css"
import Homepage from "./components/homepage/Homepage"
import Calculate from "./components/calculatepage/Calculate"
import { BrouserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
      <BrouserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/calculate" element={<Calculate />} />
        </Routes>
      </BrouserRouter>
    </>
  )
}

export default App
