import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import NavBarComp from './components/NavBarComp';
import HomeView from './views/HomeView';
import SubjectView from './views/SubjectView';
import StackMemoryToolView from './views/StackMemoryToolView';

////////////////////////////////////////////////////
//  ROOT APPLICATION
////////////////////////////////////////////////////

/**
 * Root Application
 * @returns HTML for the Root Application
 */
const App = () => {
  // **** Fields *********************************
  const subject = {
    _id: 9878798787,
    name: "Addition 1 to 5",
    category: "Math",
    answers: [
      {
        info: "1",
        questions: ["0 + 1 ="]
      },
      {
        info: "2",
        questions: ["0 + 2 =", "1 + 1 ="]
      },
      {
        info: "3",
        questions: ["0 + 3 =", "1 + 2 ="]
      },
      {
        info: "4",
        questions: ["0 + 4 =", "1 + 3 =", "2 + 2 ="]
      },
      {
        info: "5",
        questions: ["0 + 5 =", "1 + 4 =", "2 + 3 ="]
      }
    ]
  }

  // //// OUTPUT ///////////////////////////////////
  return (
    <BrowserRouter>
      <Switch >
        <Route path="/subject/:id/stackmemory">
          <StackMemoryToolView subject={subject} />
        </Route>
        <Route path="/subject/:id">
          <SubjectView subject={subject} />
        </Route>
        {/* **** Home View ******** */}
        <Route exact path="/">
          <div className='bg'>
            <HomeView />
          </div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;