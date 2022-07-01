import { useState } from "react"
import "./App.css"
import Homepage from "./components/homepage/Homepage"
import Calculate from "./components/calculatepage/Calculate"
import Nav from "./components/nav/Nav"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/calculate" element={<Calculate />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
