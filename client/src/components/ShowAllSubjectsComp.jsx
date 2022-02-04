import React from 'react';

////////////////////////////////////////////////////
//  SHOW ALL SUBJECTS COMPONENT
////////////////////////////////////////////////////

const ShowAllSubjectsComp = (props) => {
    // //// FIELDS /////////////////////////////////
    const subjects = props.subjects;

    // //// OUTPUT /////////////////////////////////
    return (<div>
        {
            subjects.map((subject, idx) => {
                return <div className='row'>
                    <button className='col btn btn-primary'>{subject.name}</button>
                </div>
            })
        }
    </div>);
};

export default ShowAllSubjectsComp;