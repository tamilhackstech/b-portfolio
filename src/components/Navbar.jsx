import React from 'react'
import myImg from "../Assets/avatar.svg";
//import Popup from 'reactjs-popup'


function Navbar () {
  return(
    
     
      <nav className="navbar  navbar-dark bg-dark" style={{marginTop:'0px'}}>
          <a className="navbar-brand" href="/">
              <img style={{ marginRight: "15px", marginLeft: "15px" }}
                  src={myImg} width="30"
                  height="30"
                  class="d-inline-block align-top mr-6"
                  alt="" />
              My Profile
          </a>

        <div className='align-right'>

        <button class="btn align-middle btn-secondary" type="button" style={{ marginRight: "5px", marginLeft: "5px" }}>
              <a style={{ all: "unset" }} href="/ToDoApp" >Project</a></button>

          {/* <button class="btn align-middle btn-secondary" type="button" style={{ marginRight: "5px", marginLeft: "5px" }}>
              <a style={{ all: "unset" }} href="/About-App" >About app</a></button> */}
          </div>     

         </nav>
  )
}


export default Navbar;