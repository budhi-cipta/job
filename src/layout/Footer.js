import React from 'react'
import {Row,Col,Container,Navbar} from 'react-bootstrap'





const Footer = () => {
    return(
       <Container>
           <Row>
               <Col>
               <Navbar.Brand href="#"><img src="https://impactbyte.com/static/brand/impactbyte_horizontal_color-trans.svg" height= "50px" alt="logo"/></Navbar.Brand>
               </Col>
               <Col>
                    <ul>
                    <li>Privacy</li>
                    <li>Cookie Preferences</li>
                    <li>Help Center</li>   
                    </ul>
               </Col>
               <Col>
               <svg width="40" height="40">
                <g fill="none" fillRule="evenodd">
                    <circle fill="#221F1F" cx="17" cy="17" r="17"></circle>
                    <path d="M17.894 22.998v-5.473h1.77l.264-2.133h-2.034v-1.361c0-.618.166-1.039 1.018-1.039H20v-1.908A14.023 14.023 0 0 0 18.415 11c-1.568 0-2.641.994-2.641 2.82v1.572H14v2.133h1.774v5.473h2.12z" fill="#FFF"></path>
                </g>
               </svg>
               <svg width="40" height="40">
                    <g fill="none" fillRule="evenodd">
                        <circle fill="#221F1F" cx="17" cy="17" r="17"></circle>
                        <path d="M14.403 23.346c5.283 0 8.172-4.557 8.172-8.509 0-.129-.002-.258-.008-.386A5.983 5.983 0 0 0 24 12.902a5.56 5.56 0 0 1-1.65.471 2.983 2.983 0 0 0 1.264-1.654 5.62 5.62 0 0 1-1.824.726 2.818 2.818 0 0 0-2.097-.945c-1.586 0-2.873 1.34-2.873 2.99 0 .235.026.463.075.682-2.387-.125-4.504-1.315-5.92-3.124a3.075 3.075 0 0 0-.39 1.503c0 1.037.508 1.953 1.279 2.489a2.766 2.766 0 0 1-1.301-.374v.038c0 1.449.99 2.658 2.303 2.932a2.774 2.774 0 0 1-1.297.051c.366 1.188 1.426 2.053 2.684 2.077A5.62 5.62 0 0 1 10 22.003a7.9 7.9 0 0 0 4.403 1.343" fill="#FFF" fill-rule="nonzero"></path>
                    </g>           
                </svg>

               </Col>
           </Row>
       </Container>
        
    )
}

export default Footer;
