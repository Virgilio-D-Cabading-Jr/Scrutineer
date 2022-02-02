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

    const initializeRandomStack = () => {
        let copyStack = [];
        for (let i=0; i<5; i++) {
            // Get Random Indexes for answer and question
            const answerIdx = Math.floor(Math.random() * subject.answers.length);
            const questionIdx = Math.floor(Math.random() * subject.answers[answerIdx].questions.length);
            // console.log("*** AnswerIdx:", answerIdx, " | questionIx:", questionIdx);
            // console.log("*** Answer:", subject.answers[answerIdx].info, " | question:", subject.answers[answerIdx].questions[questionIdx]);

            // push the indexes to the stack
            copyStack.push([answerIdx, questionIdx]);
        }
        console.log("stack:", copyStack);
        setStack(copyStack);
    }

    // **** Initialize the Stack *******************
    useEffect(() => {
        initializeRandomStack();
    }, []);

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
                        // **** Show the Stack ************
                        ?   <div>
                                <ShowStackComp answers={subject.answers} stack={stack}  />
                            </div>
                        :   <div className='stackImg'>
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
