import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

import NavBarComp from '../components/NavBarComp';

////////////////////////////////////////////////////
//  SHOW SUBJECT DIAGRAM VIEW
////////////////////////////////////////////////////

const ShowSubjectDiagramView = () => {
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
                <div className='col'></div>
                    {
                        subjectLoaded
                        ?   <img className='col-10 bg-white round' src={subject.imgUrl} alt={subject.name} />
                        :   <div className='col-10 bg-white round'>Loading</div>
                    }
                <div className='col'></div>
            </div>
            <Link className='row' to={"/subject/" + id }>
                <div className='col btn round-btn m-5 btn-primary'>Return to study {subject.name} again</div>
            </Link>
        </div>

    </div>);
};

export default ShowSubjectDiagramView;
