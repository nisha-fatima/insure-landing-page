import React from 'react';
import './App.css';
import logo from './assets/images/logo.svg'
import family from './assets/images/image-intro-desktop.jpg';
import snappy from './assets/images/icon-snappy-process.svg';
import people from './assets/images/icon-people-first.svg';
import price from './assets/images/icon-affordable-prices.svg';
import facebook from './assets/images/icon-facebook.svg';
import twitter from './assets/images/icon-twitter.svg';
import pinterest from './assets/images/icon-pinterest.svg';
import instagram from './assets/images/icon-instagram.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container } from 'react-bootstrap'



function App() {
  return (
    <div className="App">
      <div className="header">
        <img src={logo} />
        <Navbar bg="light" variant="light">
          <Container>
            <Nav className="me-auto">
              <Nav.Link href="#work">NOW WE WORK</Nav.Link>
              <Nav.Link href="#blog">BLOG</Nav.Link>
              <Nav.Link href="#account">ACCOUNT</Nav.Link>
            </Nav>
            <button className="button">VIEW PLANE</button>
          </Container>
        </Navbar>
      </div>
      <div className="container1">
        <div className="heading">
          <h1><strong>Humanizing <br /> your insurance.</strong></h1>
          <p className="pera">Get your life insurance coverage easier and faster. We blend our experties <br />
            and technology to help you find the plan that's right for you. Ensure you <br />
            and your loved ones are protected.</p>
          <button className="button2">VIEW PLANS</button>
        </div>
        <img className="family" src={family} />
      </div>
      <div>

        <h1 className="heading1"><strong>We're different</strong></h1>
        <span className="container2">
          <div>
            <img className="image2" src={snappy} />
            <h4 className="heading2"><strong>snappy Process</strong></h4>
            <p className="pera1">Our application process can be completed in <br />
              minutes, not hours. Don't get stuck filling in <br />
              tedious forms.</p>
          </div>
          <div>
            <img className="image2" src={price} />
            <h4 className="heading2"><strong>Affordable Prices</strong></h4>
            <p className="pera1">we don't want you worrying about high monthly<br />
              costs. Our prices may be low, but we still offer <br />
              the best coverage possible.</p>
          </div>
          <div>
            <img className="image2" src={people} />
            <h4 className="heading2"><strong>People First</strong></h4>
            <p className="pera1">Our plans aren't full of conditions and clauses <br />
              to prevent payouts. We make sure you're <br />
              covered when you need it. </p>
          </div>
        </span>
      </div>
      <div className="container3">
        <div className="heading3">
          <h2><strong>Find out more <br />about how we work </strong></h2>
          <button className="button3">NOW WE WORK</button>
        </div>
      </div>
      <div className="container4">
        <div className="header1">
          <img src={logo} />
          <Navbar bg="light" variant="light">
            <Container>
              <Nav className="me-auto">
                <Nav.Link href="#facebook"><img src={facebook} /></Nav.Link>
                <Nav.Link href="#twitter"><img src={twitter} /></Nav.Link>
                <Nav.Link href="#pinterest"><img src={pinterest} /></Nav.Link>
                <Nav.Link href="#instagram"><img src={instagram} /></Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </div>
        <hr className="line" />
        <div className="footer1">
          <p className="pera2">OUR COMPANY</p>
          <p className="pera2">HELP ME</p>
          <p className="pera2">CONTACT</p>
          <p className="pera2">OTHERS</p>
        </div>

        <div className="d-flex w-100">
        <div className="footer">
          <p className="pera3">HOW WE WORK</p>
          <p className="pera3">WHY INSURE</p>
          <p className="pera3">VIEW PLANS</p>
          <p className="pera3">REVIEWS</p>
        </div>
        <div className="footer">
          <p className="pera3">FAQ</p>
          <p className="pera3">TERMS OF USE</p>
          <p className="pera3">PRIVACY POLICY</p>
          <p className="pera3">COOKIES</p>
        </div>
        <div className="footer">
          <p className="pera3">SALES</p>
          <p className="pera3">SUPPORT</p>
          <p className="pera3">LIVE CHAT</p>
        </div>
        <div className="footer">
          <p className="pera3">CAREERS</p>
          <p className="pera3">PRESS</p>
          <p className="pera3">LICENSES</p>
        </div>
        </div>
      </div>


     
    </div>
  );
}

export default App;
