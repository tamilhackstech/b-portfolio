import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../Assets/home-main.jpg";
import myImg from "../Assets/avatar.gif";
import Particle from "../Particle";
import Tilt from "react-parallax-tilt";
//import Home2 from "./Home2";
import {
    AiFillGithub,
    AiOutlineTwitter,
    AiFillInstagram,
  } from "react-icons/ai";
  import { FaLinkedinIn } from "react-icons/fa";
import Typewriter from "typewriter-effect";

function Home() {
  return (
    <section class= "home" >            
      <Container  className=" home-section" id="home">
        <Particle />
        <Container className=" home-content">
          <Row>
            <Col md={7} className="home-header">
              <h3 style={{ paddingBottom: 15, marginTop:"30px" }} className="heading">
                Hi There! <span className="wave" role="img" aria-labelledby="wave">👋🏻</span>
              </h3>

              <h3 className="heading-name">
                I'm
                <strong className="main-name"> Balasubramaniyan</strong>
              </h3>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Typewriter
                  options={{
                    strings: [
                      "Front End Developer",
                      "Software Engineer",
                      "Doing MERN Stack",
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                  }}
                />
              </div>
            </Col>

            <Col xs={{ order: 'last' }} md={5} style={{ paddingBottom: 20 }}>
            <Tilt>
              <img src={homeLogo} alt="home pic" className="img-fluid" style={{ width:"200px", height:"200px"}} />
              </Tilt>
            </Col>
          </Row>
        </Container>
        
      </Container>
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h4 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h4>
            <p className="home-about-body">
              During My high school days, i came to learn about programming, ever since that i been in love with coding ❤️
              <br />
              <br />I am good in classics like
              <i>
                <b className="purple"> Html, Css, Javascript, Java. </b>
              </i>
              <br />
              <br />
              I'm currently looking for opportunities in the field of Web Development
with a focus on developing Awesome websites. I've obtained knowledge on various technologies and
practising more on that to improve my skills/exposure to reach my Goal.
</p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg } className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>

        <div >
      <h3>EXPERIENCE</h3>
      <h4>You Tuber Jan-2020 - Present</h4>
      <h4>Designation: Video Editor, Channel manager</h4>
      <ul>
        <li>  Myself and brother we are having 2 YouTube channel with more than 4 lakh subscribers,
where my brother teaches coding concepts, and gives updates about tech world, etc.      </li>
<li> I contribute there by video editing and managing the channel etc, for the past 2 years. </li>
      </ul>
    
    </div>
        <Row>
          <Col md={12} className="home-about-social">
            
            <p>
              Feel free to <span className="purple">connect </span>with me on  </p>  
                    <ul className="inline" >
                      <li class="btn btn-secondary" style={{ display: "inline", marginRight:"20px" }}>
                      <a  href="https://www.linkedin.com/in/balasubramaniyan-t-340167210/"
                  target="_blank" style={{ all: "unset" }}
                  rel="noreferrer" > Linkedin  </a>
                      </li>
                      <li class="btn btn-secondary" style={{ display: "inline"}}>
                        
                        <a style={{ all: "unset" }} href = "mailto: balasubramani2471@gmail.com">Send Email</a></li>
                      </ul>              
               
               

                
 
              
           
          </Col>
        </Row>
    </Container>
   
    </section>
  );
}

export default Home;
