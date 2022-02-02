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
    return (<div className='row p-3 m-3 bg-primary round text-white'>
        <div className='col'>
            {
                stack.map((row, idx) => {
                    const answerIdx = row[0];
                    const questionIdx = row[1];
                    const question = answers[answerIdx].questions[questionIdx]
                    return <div key={ idx } className='row mb-1'>
                            <div className='col-2'>{ stack.length-idx }</div>
                            {
                                idx == 0
                                ?   <div className='col-9 bg-warning p-2 round text-center'><h3>{ question }</h3></div>
                                :   idx % 2 == 0
                                    ?   <div className='col-9 bg-white text-dark p-2 round text-center'><h3>{ question }</h3></div>
                                    :   <div className='col-9 bg-info text-dark p-2 round text-center'><h3>{ question }</h3></div>
                            }
                            
                        </div>
                })
            }
        </div>
    </div>);
};

export default ShowStackComp;
