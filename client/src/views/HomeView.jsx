import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import HomeNavBarComp from '../components/HomeNavBarComp';

////////////////////////////////////////////////////
//  HOME VIEW
////////////////////////////////////////////////////

const HomeView = () => {
    // //// FIELDS /////////////////////////////////
    
    const [subjects, setSubjects] = useState({});

    // //// RETRIEVE SUBJECTS FROM DATABASE ////////

    useEffect(()=>{
        axios.get("http://localhost:8000/api/subjects")
            .then(res => {
                console.log("*** In get all subjects *** | Res.data.subjects:", res.data.subjects);
                setSubjects(res.data.subjects);
            }) 
    },[]);
    
    // //// OUTPUT /////////////////////////////////

return (<div>
        <HomeNavBarComp />
        <div className='container mt-2'>
            <div className='row p-3 round'>
                <div className="col-md-9 bg-info round show-welcome">
                    <h2>Welcome, Let's Study</h2>
                    <hr />
                    <h3>Math:</h3>
                    <Link to="/subject/636">
                        <button className='btn btn-primary round mb-3'>
                            <strong>Addition: 1 to 10</strong>
                        </button>
                    </Link>
                </div>
                <div className='col-md-3'>
                    <p>&nbsp;</p>
                </div>
            </div>
        </div>
    </div>);
};

export default HomeView;