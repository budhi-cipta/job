import React from 'react';

import './Joblist.css'

const JobList = ({title,location,division}) => {
        return(
            
        <div className="wraperJob">
            <h2>{title}</h2>
            <h6>{location}</h6>
            <h6>{division}</h6>
        </div>
        )
}


export default JobList;