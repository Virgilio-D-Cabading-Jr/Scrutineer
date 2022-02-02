import React from 'react'
import { Link } from 'react-router-dom';

////////////////////////////////////////////////////
//  HOME NAVIGATION BAR COMPONENT
////////////////////////////////////////////////////

/**
 * NAVIGATION BAR COMPONENT
 * @returns HTML for a Navigation Bar
 */
const HomeNavBarComp = () => {
    // //// OUTPUT /////////////////////////////////
    return (
        <header>
            {/* **** Navigation Bar ******** */}
            <div className='navbar navbar-dark box-shadow'>
                <div className='container d-flex justify-content-between'>
                    {/* **** Site Title ******** */}
                    <h2 className='text-white'><strong>Scrutineer 📚</strong></h2>
                    {/* **** Link to The Root of the Site ******** */}
                    {/* <Link to="/">
                        <button className='btn btn-sm btn-info round-btn'>
                            <strong>🏡 Home</strong>
                        </button>
                    </Link> */}
                </div>
            </div>
        </header>
    )
}

export default HomeNavBarComp