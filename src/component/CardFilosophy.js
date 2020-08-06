import React from 'react'
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom'

import './Cardfilo.css'


const CardFilosophy = ({ dataPhilosophy }) => {
    
    return (
       <>
           {
            dataPhilosophy.map(dataCardku => {
                console.log(dataCardku)

                if(dataCardku.position === "left"){
                    return (
                    <div className="container1"> 
                        <div className="cardBody">
                            <div className="kotakKiri">
                                <img src={dataCardku.Image} height="250px" alt="img"/>
                            </div>
                            <div className="isi">
                                <h3>{dataCardku.Title}</h3>
                                <p>{dataCardku.Description}</p>
                                <Link to="/">
                                     <Button variant="primary">Read About Our Culture</Button>
                                </Link>
                            </div>
                        </div>
                    </div> 
                    )
                }else{
                    return(
                        <div className="container2">
                            <div className="cardBody2">
                                <div className="kotakKanan">
                                    <h3>{dataCardku.Title}</h3>
                                    <p>{dataCardku.Description}</p>
                                    <Link to="/">
                                     <Button variant="primary">Read About Our Culture</Button>
                                    </Link>
                                </div>    
                                <div className="isi2">
                                    <img src={dataCardku.Image} height="250px" alt="img"/>
                                </div>
                            </div>
                                
                        </div>
                    )
                }
            })
            }  
        </>
    )
        
}
export default CardFilosophy;
            
             