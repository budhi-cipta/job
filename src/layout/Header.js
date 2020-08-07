import React from 'react'
import{Container,Navbar,Nav,Form,FormControl,Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'




const Header = () => {
    return(
        <Container>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#"><img src="https://impactbyte.com/static/brand/impactbyte_horizontal_color-trans.svg" height= "50px" alt="logo" />Impact Byte</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Link to="/Home">Home</Link>
                        <Link to="/joblist">List Job</Link>
                        <Link to="/bloglist">Blog List</Link>
                    </Nav>
                    <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </Container>
        
        
    )
}

export default Header;