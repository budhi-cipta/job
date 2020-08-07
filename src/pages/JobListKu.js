import React from 'react'
import Layout from '../layout/Layout'
import JobList from '../component/JobList/JobList'

const JobListKu = () => {

    const InfoList = [
        {
            title:"Senior Product manager - Security experience",
            location:"Los gatos california",
            division:"Security"
        },
        {
            title:"Senior Product manager - Security experience",
            location:"Los gatos california",
            division:"Security"
        },
        {
            title:"Senior Product manager - Security experience",
            location:"Los gatos california",
            division:"Security"
        },
        {
            title:"Senior Product manager - Security experience",
            location:"Los gatos california",
            division:"Security"
        }
    ]



    return (
        <Layout>
            <div className="job">
                {
                  InfoList.map((job) => (
                  <JobList
                  title={job.title}
                  location={job.location}
                  division={job.division}
                  />
                  ))    
                }   
            </div>   
        </Layout>
    )
};

export default JobListKu;