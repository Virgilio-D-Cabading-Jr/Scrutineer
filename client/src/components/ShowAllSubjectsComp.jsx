import React from 'react';

////////////////////////////////////////////////////
//  SHOW ALL SUBJECTS COMPONENT
////////////////////////////////////////////////////

const ShowAllSubjectsComp = (props) => {
    // //// FIELDS /////////////////////////////////
    const subjects = props.subjects;

    // //// OUTPUT /////////////////////////////////
    return (<div>
        {/* <h1>In Show All Subjects</h1> */}
        {/* <p>subjects: {JSON.stringify(subjects)}</p> */}
        {
            subjects
            ?   subjects.map((subject, idx) => <div className='row'>
                    <button className='col btn btn-primary m-2 p-2 round'>
                        <div className='row'>
                            <div className='col-8'>
                                <h3>Subject: {subject.name}</h3>
                                <p>Category: {subject.category}</p>
                            </div>
                            <div className='col-3'>
                                <img className='img-fluid' src=""
                            </div>
                        </div>
                    </button>
                </div>)
            :   <div>Loading . . .</div>
        }
    </div>);
};

export default ShowAllSubjectsComp;