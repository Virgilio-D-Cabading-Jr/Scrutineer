import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';

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
    const [usersAnswer, setUsersAnswer] = useState(subject.answers[0].info);
    const [message, setMessage] = useState(null);
    const history = useHistory();

    // **** Utilities ******************************

    // **** Create a New Stack ********
    const initializeRandomStack = () => {
        let copyStack = [];
        for (let i = 0; i < 5; i++) {
            // Get Random Indexes for answer and question
            const answerIdx = Math.floor(Math.random() * subject.answers.length);
            const questionIdx = Math.floor(Math.random() * subject.answers[answerIdx].questions.length);
            // add to the front of the array
            copyStack.push([answerIdx, questionIdx]);
        }
        setStack(copyStack);
    }

    // **** Add two questions to the stack ********
    const addTwoToRandomStack = () => {
        let copyStack = [...stack];
        for (let i = 0; i < 2; i++) {
            // Get Random Indexes for answer and question
            const answerIdx = Math.floor(Math.random() * subject.answers.length);
            const questionIdx = Math.floor(Math.random() * subject.answers[answerIdx].questions.length);
            // push the indexes to the stack
            copyStack.unshift([answerIdx, questionIdx]);
        }
        setStack(copyStack);
    }

    // **** Handle Submit of Form ********
    const handleSubmit = (e) => {
        e.preventDefault();
        const answer = subject.answers[stack[0][0]]
        const questionIdx =stack[0][1];
        if (usersAnswer === answer.info) {
            setMessage(<p className='alert alert-success text-center round'>Correct! The answer for {answer.questions[questionIdx]} is {answer.info}</p>);
            stack.shift();
        } else {
            setMessage(<p className='alert alert-danger text-center round'>Wrong. The answer for {answer.questions[questionIdx]} is {answer.info}</p>);
            stack.shift();
            addTwoToRandomStack();
        }
        setUsersAnswer(subject.answers[0].info);
    }

    // **** Initialize the Stack *******************
    useEffect(() => initializeRandomStack(), [toolStarted]);

    // **** Output *********************************
    return (<div>
        <NavBarComp />
        <div className='container mt-4'>
            <div className='row p-3 round'>
                <div className="col bg-white round">
                    <h2 className='text-center' >Scrutinize the Stack</h2>
                    <p className='text-center text-info' >Directions: Answer the top question on the stack.  <br />Correct answer, reduces the stack, Wrong answer grows the stack.  <br />Reduce the stack to nothing to win the challenge</p>
                    {/* <p>Answer: {JSON.stringify(usersAnswer)}</p> */}
                    {/* <p>Message: {message}</p> */}
                    <hr />
                    {/* **** Determine if Tool has started or not ******** */}
                    {
                        toolStarted
                            // **** Show the Stack ************
                            ? <div>
                                <ShowStackComp answers={subject.answers} stack={stack} />
                                { message }
                                {
                                    // To Display the form, first check to make sure stack is not empty or full
                                    (stack.length>0) && (stack.length<10)
                                    // **** Input Form ********
                                    ?   <form onSubmit={e => handleSubmit(e)} >
                                            <div className='row m-3'>
                                                <div className='col'>
                                                    <h4>Answer:</h4>
                                                    {/* **** Select Input ******** */}
                                                    <select className="form-control" value={usersAnswer}
                                                        onChange={e => setUsersAnswer(e.target.value)}>
                                                        {
                                                            subject.answers.map((answer, idx) => {
                                                                return <option key={idx} value={answer.info} >{answer.info}</option>
                                                            })
                                                        }
                                                    </select>
                                                </div>
                                            </div>
                                            <div className='row m-3'>
                                                <button type="submit" className="btn btn-success round col">
                                                    <strong>Submit Answer</strong>
                                                </button>
                                            </div>
                                        </form>
                                    :   <div>
                                            {/* **** Determine if User Won or Lost ******** */}
                                            {
                                                stack.length<1
                                                // **** Win Condition met ********
                                                ?   <div className='m-3'>
                                                        <h2 className='text-center'>Congratulations, You Rock</h2>
                                                        <div className='row'>
                                                            <button className='col m-3 btn btn-warning round' onClick={e=>setToolStarted(false)}>
                                                                <strong className='text-white'>Reset Game</strong>
                                                            </button>
                                                            <button className='col m-3 btn btn-primary round' onClick={e=>{history.push("/subject/"+subject._id)}} >
                                                                <strong className='text-white'>Study {subject.name} some more</strong>
                                                            </button>
                                                        </div>
                                                    </div>
                                                // **** Lose Condition occured *********
                                                :   <div className='m-3'>
                                                        <h2 className='text-center text-danger'>Oh pooh. . . Game Over</h2>
                                                    </div>
                                            }
                                        </div>
                                }
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