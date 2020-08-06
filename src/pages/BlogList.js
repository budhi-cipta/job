import React from 'react'
import {useParams} from 'react-router-dom'

function BlogList () {
    let {id} = useParams();

    return(
        <div className="wrap">
            <h3>ini adalah halaman : {id}</h3>
        </div>
    );
}

export default BlogList;