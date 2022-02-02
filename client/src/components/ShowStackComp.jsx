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
                (stack.length>0) && (stack.length<10)
                ?   stack.map((row, idx) => {
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
                :   stack.length<1
                    ?   <div className='row bg-success round m-3'>
                                <img className='col img-fluid mt-3 mb-3 round' src="https://c.tenor.com/wGwD1kHjS4sAAAAC/you-win-8bit.gif" alt="Bravo You Win" border="0" />
                        </div>
                    :   <div className='row bg-danger round m-3'>
                            <div className='col'>
                                <img className='img-fluid mt-3 mb-3 round' src="https://i.ibb.co/RPJ6twz/7U0G.gif" alt="Game Over" border="0" />
                            </div>
                        </div>
            }
        </div>
    </div>);
};

export default ShowStackComp;
