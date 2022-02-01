import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import NavBarComp from './components/NavBarComp';
import HomeView from './views/HomeView';
import SubjectView from './views/SubjectView';

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
      <Switch >
        {/* **** Home View ******** */}
        <Route exact path="/">
          <div className='bg'>
            <HomeView />
          </div>
        </Route>
        <Route path="/subject/id">
          <SubjectView />
        </Route>


      </Switch>
    </BrowserRouter>
  );
}

export default App;