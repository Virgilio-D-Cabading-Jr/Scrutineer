import React from 'react';

import NavBarComp from '../components/NavBarComp';

////////////////////////////////////////////////////
//  SUBJECT VIEW
////////////////////////////////////////////////////

const SubjectView = () => {
    // **** Fields *********************************
    

    // **** Output *********************************
    return (<div>
        <NavBarComp />
        <div className='container mt-4'>
            <div className='row p-3 round'>
                <div className="col bg-white round">
                    <h1>Subject View</h1>
                </div>
            </div>
        </div>

    </div>);
};

export default SubjectView;
