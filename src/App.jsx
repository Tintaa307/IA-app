import { useState } from "react"
import "./App.css"
import Homepage from "./components/homepage/Homepage"
import Calculate from "./components/calculatepage/Calculate"
import Nav from "./components/nav/Nav"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Footer from "./components/footer/Footer"

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/calculate" element={<Calculate />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
