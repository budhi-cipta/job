import React from 'react';
import {Button} from 'react-bootstrap';

import "./Blogcard.css";

const BlogCard = ({Category,Title,Author,Description,Textbuton}) => {
    console.log(Category)
    return(
       <>
           
                <div className="containerBlog">
                    <div className="category">{Category}</div>
                    <div className="isi">
                        <h3>{Title}</h3>
                        <h3>{Author}</h3>
                        <p>{Description}</p>
                        <Button variant="danger">{Textbuton}</Button> 
                    
                    </div>
                </div>
           
       </> 
    );
}



export default BlogCard;
