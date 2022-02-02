import React, { useState, useEffect } from 'react';

import NavBarComp from '../components/NavBarComp';
import ShowStackComp from '../components/ShowStackComp';

////////////////////////////////////////////////////
//  STACK MEMORY INSTALL VIEW
////////////////////////////////////////////////////

const StackMemoryToolView = (props) => {
    // **** Fields *********************************
    const subject = props.subject;
    const [toolStarted, setToolStarted] = useState(false);
    const [stack, setStack] = useState([]);

    // **** Utilities ******************************

    // **** Create a New Stack ********
    const initializeRandomStack = () => {
        let copyStack = [];
        for (let i = 0; i < 5; i++) {
            // Get Random Indexes for answer and question
            const answerIdx = Math.floor(Math.random() * subject.answers.length);
            const questionIdx = Math.floor(Math.random() * subject.answers[answerIdx].questions.length);
            // push the indexes to the stack
            copyStack.push([answerIdx, questionIdx]);
        }
        // console.log("stack:", copyStack);
        setStack(copyStack);
    }

    // **** Handle Submit of Form ********
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    // **** Initialize the Stack *******************
    useEffect(() => initializeRandomStack(), []);

    // **** Output *********************************
    return (<div>
        <NavBarComp />
        <div className='container mt-4'>
            <div className='row p-3 round'>
                <div className="col bg-white round">
                    <h2 className='text-center' >Scrutinize the Stack</h2>
                    <p className='text-center text-info' >Directions: Answer the top question on the stack.  <br/ >Correct answer, reduces the stack, Wrong answer grows the stack.  <br />Reduce the stack to nothing to win the challenge</p>
                    <hr />
                    {/* **** Determine if Tool has started or not ******** */}
                    {
                        toolStarted
                            // **** Show the Stack ************
                            ? <div>
                                <ShowStackComp answers={subject.answers} stack={stack} />
                                {/* **** Input Form ******* */}
                                <form onSubmit={e => handleSubmit(e)} >
                                    <div className='row m-3'>
                                        <button type="submit" className="btn btn-success round col">
                                            <strong>Submit Answer</strong>
                                        </button>

                                    </div>
                                </form>
                            </div>
                            // **** If Tool has not Started, show Start button ********
                            : <div className='stackImg'>
                                <div className='row'>
                                    <img className='col round'
                                        src="https://i.ibb.co/MPPxPYk/Srutineer-start-memory-stack-header.png"
                                        alt="Scrut Detective" />
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