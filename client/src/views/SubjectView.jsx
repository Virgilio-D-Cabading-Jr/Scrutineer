import React from 'react';
import { Link } from 'react-router-dom';

import NavBarComp from '../components/NavBarComp';

////////////////////////////////////////////////////
//  SUBJECT VIEW
////////////////////////////////////////////////////

const SubjectView = (props) => {
    // **** Fields *********************************
    const subject = props.subject;

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
