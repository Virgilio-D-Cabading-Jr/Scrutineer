import React from 'react';

////////////////////////////////////////////////////
//  SHOW ALL SUBJECTS COMPONENT
////////////////////////////////////////////////////

const ShowAllSubjectsComp = (props) => {
    // //// FIELDS /////////////////////////////////
    const subjects = props.subjects;

    // //// OUTPUT /////////////////////////////////
    return (<div>
        {/* <p>{JSON.stringify(subjects)}</p> */}
        {
            props.subjectLoaded
            ?   subjects.map((subject, idx) => <div className='row' key={idx}>
                    <div className='col btn btn-primary m-2 p-2 round'>
                        <div className='row'>
                            <div className='col-8'>
                                <h3>Subject: {subject.name}</h3>
                                <p>Category: {subject.category}</p>
                            </div>
                            <div className='col-3'>
                                <img className='img-fluid' src={subject.imgUrl} alt={subject.name} />
                            </div>
                        </div>
                    </div>
                </div>)
            :   <div>Loading . . .</div>
        }
    </div>);
};

export default ShowAllSubjectsComp;