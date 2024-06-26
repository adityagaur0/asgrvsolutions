import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/asgrv-logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
// import navIcon2 from "../assets/img/nav-icon2.svg";
// import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
  <Row className="align-items-center justify-content-between">
    <MailchimpForm />
    <Col size={12} sm={6}>
      <img src={logo} alt="Logo" />
    </Col>

    <Col size={12} sm={4} className="text-center text-sm-start">
    <br/>
      <div className="social-icon d-flex justify-content-center justify-content-sm-start">
        <a href="https://www.linkedin.com/company/asgrv/"><img src={navIcon1} alt="Icon" /></a>
        {/* <a href="#"><img src={navIcon2} alt="Icon" /></a>
        <a href="#"><img src={navIcon3} alt="Icon" /></a> */}
      </div>
      <br />
      
      <h6>Address</h6>
      <p>HOUSE NO-57,BLOCK-B,<br /> PARIJAT APTTS PITAM PURA,<br /> New Delhi , 110039, IN</p>
      <h6>Phone no: <p>+91 9977646947</p></h6>

      <h6>Email: <a href="mailto:asgrvsolutions@gmail.com">asgrvsolutions@gmail.com</a></h6>
     <br/>
      <p>Copyright 2023. All Rights Reserved</p>
    </Col>
  </Row>
</Container>

    </footer>
  )
}