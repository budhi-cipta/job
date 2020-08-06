import React from 'react'
import ReactPlayer from 'react-player'
import {Container,Row,Col} from 'react-bootstrap'



const VideoTube = ({title,url}) => {
    return(    
               <Container className="cardVideo">
                   <h4 className="d-flex bd-highlight justify-content-center">Last From Impact byte</h4>
                   <Row>
                       <Col>
                        <ReactPlayer url="https://youtu.be/uRtcr9EZLdg" width="300px" height="200px"/>
                        <title /> <p>interview</p>
                       </Col>
                       <Col>
                        <ReactPlayer url="https://youtu.be/uRtcr9EZLdg" width="300px" height="200px"/>
                        <title /> <p>class online</p>
                       </Col>
                       <Col>
                        <ReactPlayer url="https://youtu.be/uRtcr9EZLdg" width="300px" height="200px"/>
                        <title /> <p>smk bisa ngoding</p>
                       </Col>
                   </Row>
               </Container>
        
    )
}
export default VideoTube;
