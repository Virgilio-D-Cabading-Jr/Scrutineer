import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

import NavBarComp from '../components/NavBarComp';

////////////////////////////////////////////////////
//  SUBJECT VIEW
////////////////////////////////////////////////////

const SubjectView = () => {
    // **** Fields *********************************
    const { id } = useParams();
    const [subject, setSubject] = useState({});
    const [subjectLoaded, setSubjectLoaded] = useState(false);

    // **** Retrieve Subject from Database *********

    useEffect(() => {
        axios.get("http://localhost:8000/api/subjects/" + id)
        .then(response => {
            console.log("*** In subject view | res.data:", response.data);
        })
        .catch(error => console.log("⚠⚠⚠ ERROR FOUND when looking for subject ⚠⚠⚠"));
    }, []);

    // **** Output *********************************
    return (<div>
        <NavBarComp />
        <div className='container mt-2'>
            <div className='row p-3 round'>
                <div className="col bg-white round">
                    <h1>{ subject.name }</h1>
                    <h3>Category: { subject.category }</h3>
                    {/* <p>Answers: { JSON.stringify(subject.answers) }</p> */}
                    <Link to={"/subject/" + subject._id + "/stackmemory"}>
                        <div className='row'>
                            <div className='col bg-warning round text-center text-white m-3'>
                                <h2>Stack Manager Tool</h2>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>

    </div>);
};

export default SubjectView;
