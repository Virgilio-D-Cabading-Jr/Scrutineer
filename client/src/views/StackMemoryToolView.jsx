import React, { useState } from 'react';

import NavBarComp from '../components/NavBarComp';

////////////////////////////////////////////////////
//  STACK MEMORY INSTALL VIEW
////////////////////////////////////////////////////

const StackMemoryToolView = (props) => {
    // **** Fields *********************************
    const subject = props.subject;
    const [toolStarted, setToolStarted] = useState(false);

    // **** Output *********************************
    return (<div>
        <NavBarComp />
        <div className='container mt-4'>
            <div className='row p-3 round'>
                <div className="col bg-white round">
                    <h2 className='text-primary text-center' >Scrutinize the Stack</h2>
                    <hr />
                    {/* **** Determine if Tool has started or not ******** */}
                    {
                        toolStarted
                        ? <div>Tool Started</div>
                        : <div className='stackImg'>
                            <div className='row'>
                                <img className='col round'
                                    src="https://i.ibb.co/MPPxPYk/Srutineer-start-memory-stack-header.png" 
                                    alt="Scrut Detective"/>
                            </div>
                            <div className='row m-3'>
                                <button className='col btn btn-warning round'
                                    onClick={e => setToolStarted(true)} >
                                    <strong>Start a New Round</strong>
                                </button>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    </div >);
};

export default StackMemoryToolView;
