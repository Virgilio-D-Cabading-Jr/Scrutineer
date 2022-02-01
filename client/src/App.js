import './App.css';
import { BrowserRouter, Switch } from 'react-router-dom';

import NavBarComp from './components/NavBarComp';

////////////////////////////////////////////////////
//  ROOT APPLICATION
////////////////////////////////////////////////////

/**
 * Root Application
 * @returns HTML for the Root Application
 */
const App = () => {
  // //// OUTPUT ///////////////////////////////////
  return (
      <BrowserRouter>
        <div className='root'>
        {/* **** NAVIGATION BAR ********* */}
        <NavBarComp />
        <Switch >
          {/* **** MAIN COMPONENT ********** */}
          {/* <Main /> */}
        </Switch>

        </div>
      </BrowserRouter>
  );
}

export default App;