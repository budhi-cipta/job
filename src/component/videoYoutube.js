import React from 'react'
import ReactPlayer from 'react-player'
import {FormControl,Button,InputGroup} from 'react-bootstrap'



const VideoYouTube = () => {
    const Posisi = {
        height: "500px",
        overflow: "hidden",
        marginBottom: "5px",
    }
    const Atas={
        position: "absolute",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "400px",
        marginTop: "40px",
        zIndex: "1",
    }
    const H1 ={
        color:"snow",
        fontWeight:"900",
        maxWidth: "52rem",
        
    }
    const Source = "https://videos.ctfassets.net/i5wc420v2vd1/3ST3WLEGpWUu2Ymg8WoEMs/06ee7becf93cce3083b115d2feb63a8b/Netflix-MainHero-V2.mp4"
    return(
        <div>
            <div className="atas" style={Atas}>
                <h2 style={H1}>Wujudkan Mimpi, Ciptakan Perubahan!</h2>
                <div className="form">
                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="Search By Keyword"
                       
                        ariaDescribedby="basic-addon2"
                    />
                    <InputGroup.Append>
                        <Button variant="p-3 mb-2 bg-info text-white">Search</Button>
                    </InputGroup.Append>
                </InputGroup>
                </div>
            </div>
        
            <div className="d-flex p-2 bd-highlight" style={Posisi}>
                <ReactPlayer
                    className="react-player "
                    url={Source}
                    playing={true} loop={true} muted={true} width="100%" height="100%"
                />                   
            </div>
        </div>
    )
}

export default VideoYouTube;