import React from 'react';

////////////////////////////////////////////////////
//  SHOW STACK COMPONENT
////////////////////////////////////////////////////

const ShowStackComp = (props) => {
    // **** Fields *********************************
    const answers = props.answers;
    const stack = props.stack;

    const generateStack = () => {
        let output = (<div className='row mb-1'><div className='col-2'>1</div><div className='col-9 bg-warning p-2 round'>question</div></div>)
        for (let idx=stack.length; idx>0; idx--) {
            output += <div className='row mb-1'><div className='col-2'>1</div><div className='col-9 bg-warning p-2 round'>question</div></div>
        }
        console.log("*** Output ***:", output)
        return output;
    }

    // **** Output *********************************
    return (<div className='row m-3 border border-primary round'>
        <div className='col'>
            <p>Answers: {JSON.stringify(answers)}</p>
            <p>Stack: {JSON.stringify(stack)}</p>
            {
                stack.map(() => {
                    return <div className='row mb-1'><div className='col-2'>1</div><div className='col-9 bg-warning p-2 round'>question</div></div>
                })
            }
        </div>
    </div>);
};

export default ShowStackComp;
