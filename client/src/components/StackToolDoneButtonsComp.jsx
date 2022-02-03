import React from 'react';
import { useHistory } from 'react-router-dom';

////////////////////////////////////////////////////
//  SHOW STACK COMPONENT
////////////////////////////////////////////////////

const StackToolDoneButtonsComp = (props) => {
    const history = useHistory();
    return (<div>
        <div className='row'>
            <button className='col m-3 btn btn-warning round' onClick={e => props.setToolStarted(false)}>
                <strong className='text-white'>Reset Game</strong>
            </button>
            <button className='col m-3 btn btn-primary round' onClick={e => { history.push("/subject/" + props.subject._id) }} >
                <strong className='text-white'>Study {props.subject.name} some more</strong>
            </button>
        </div>
    </div>);
};

export default StackToolDoneButtonsComp;
