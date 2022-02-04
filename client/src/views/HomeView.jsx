import axios from 'axios';
import React, { useState, useEffect } from 'react';

import HomeNavBarComp from '../components/HomeNavBarComp';
import ShowAllSubjectsComp from '../components/ShowAllSubjectsComp';

///////////////////////////////////////////////////
//  HOME VIEW
////////////////////////////////////////////////////

const HomeView = () => {
    // //// FIELDS /////////////////////////////////
    
    const [subjects, setSubjects] = useState({});
    const [subjectLoaded, setSubjectLoaded] = useState(false);

    // //// RETRIEVE SUBJECTS FROM DATABASE ////////

    useEffect(()=>{
        axios.get("http://localhost:8000/api/subjects")
            .then(res => {
                console.log("*** In get all subjects *** | Res.data.subjects:", res.data.subjects);
                setSubjects(res.data.subjects);
                setSubjectLoaded(true);
            }) 
    },[]);
    
    // //// OUTPUT /////////////////////////////////

return (<div>
        <HomeNavBarComp />
        <div className='container mt-2'>
            <div className='row p-3 round'>
                <div className="col-md-9 round show-welcome">
                    <h2 className='text-white'>Welcome, Let's Study</h2>
                    {/* <p>Subjects:{JSON.stringify(subjects)}</p> */}
                    <hr />
                    <ShowAllSubjectsComp subjects={subjects} subjectLoaded={ subjectLoaded } />
                </div>
                <div className='col-md-3'>
                    <p>&nbsp;</p>
                </div>
            </div>
        </div>
    </div>);
};

export default HomeView;