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
    return (<div className='row p-3 m-3 bg-primary round text-white show-stack-window'>
        <div className='col'>
            {
                (stack.length>0) && (stack.length<=10)
                ?   stack.map((row, idx) => {
                        const answerIdx = row[0];
                        const questionIdx = row[1];
                        const question = answers[answerIdx].questions[questionIdx]
                        return <div key={ idx } className='row mb-1'>
                                <div className='col-2'>{ stack.length-idx }</div>
                                {
                                    idx == 0
                                    ?   <div className='col-9 bg-warning p-1 round text-center'><h4>{ question }</h4></div>
                                    :   idx % 2 == 0
                                        ?   <div className='col-9 bg-white text-dark p-1 round text-center'><h4>{ question }</h4></div>
                                        :   <div className='col-9 bg-info text-dark p-1 round text-center'><h4>{ question }</h4></div>
                                }
                                
                            </div>
                    })
                :   stack.length<1
                    ?   <div className='row bg-success round m-3'>
                            <div className='col text-center'>
                                <div className='row'>
                                    <div className='col'></div>
                                    <div className='col-9'><img className='img-fluid mt-3 mb-3 round' src="https://i.ibb.co/M8zZbzn/goodjob450.jpg" alt="Bravo You Win" border="0" /></div>
                                    <div className='col'></div>
                                </div>
                            </div>
                        </div>
                    :   <div className='row bg-danger round m-3'>
                            <div className='col'>
                            <div className='row'>
                                    <div className='col'></div>
                                    <img className='col-9 img-fluid mt-3 mb-3 round' src="https://i.ibb.co/jZk0B72/i-dont-think-that-s-correct450.jpg" alt="Game Over" border="0" />
                                    <div className='col'></div>
                                </div>

                            </div>
                        </div>
            }
        </div>
    </div>);
};

export default ShowStackComp;
