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
                setSubject(response.data.subject);
                setSubjectLoaded(true);
            })
            .catch(error => console.log("⚠⚠⚠ ERROR FOUND when looking for subject ⚠⚠⚠"));
    }, []);

    // **** Output *********************************
    return (<div className='bg-greybooks'>
        <NavBarComp />
        <div className='container mt-2'>
            <div className='row p-3 round'>
                <div className="col bg-white round">
                    <div className='row bg-maroon text-white m-3 p-3 round'>
                        <div className='col-5 p-3'>
                            <h1>{subject.name}</h1>
                            <h3 className='m-3'>Category: {subject.category}</h3>
                        </div>
                        <div className='col'></div>
                        <Link className='col-5' to={"/subject/" + id + "/diagram"}>
                            <div className='row'>
                                <img className='col' src={subject.imgUrl} />
                            </div>
                        </Link>
                    </div>
                    {/* <p>Answers: { JSON.stringify(subject.answers) }</p> */}
                    <Link className='link-noline' to={"/subject/" + id + "/stackmemory"}>
                        <div className='row m-3'>
                            <div className='col bg-warning round text-center text-white m-3 p-3'>
                                <div className='row' >
                                    <div className='col-6'>
                                        <h2>Stack Manager<br />Tool</h2>
                                    </div>
                                    <img className='col-6 round' src="https://i.ibb.co/GpLWXMp/stack-manager-tool-snapshot.png" alt="stack memory screen capture" />
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>

    </div>);
};

export default SubjectView;
