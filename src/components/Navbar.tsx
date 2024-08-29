// import React from 'react'
import logo from "../assets/game logo.jpg"
const Navbar = () => {
  return (
    <div className="d-flex border">
    <section className="border border-success flex-grow-1">
    <img src={logo} alt="logo" className="img-fluid d-none d-md-inline" style={{width:"10%"}
    }/>
    <img src={logo} alt="logo" className="img-fluid d-md-none" style={{ width: "27%",}
    }/>
    <span className="col px-2">NavBar</span>
    </section>

    <section className="align-self-center border border-primary flex-grow-1">
      darkmode
    </section>
  </div>
  
  )
}

export default Navbar