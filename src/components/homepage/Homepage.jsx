import React from "react"
import "./homepage.css"

const Homepage = () => {
  return (
    <main className="container-home">
      <div className="container-content">
        <div className="container-title">
          <h1>
            Your Gym Pair <span>AI</span>
          </h1>
        </div>
        <div className="container-console">
          <div className="console">
            <div className="nav-console">
              <div className="item">
                <div className="rojo"></div>
              </div>
              <div className="item">
                <div className="amarillo"></div>
              </div>
              <div className="item">
                <div className="verde"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="back-color"></div>
      </div>
    </main>
  )
}

export default Homepage
