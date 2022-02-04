import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import NavBarComp from './components/NavBarComp';
import HomeView from './views/HomeView';
import SubjectView from './views/SubjectView';
import StackMemoryToolView from './views/StackMemoryToolView';
import ShowSubjectDiagramView from './views/ShowSubjectDiagramView';

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
    name: "Addition 1 to 10",
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
        questions: ["0 + 3 =", "1 + 2 =", "2 + 1 ="]
      },
      {
        info: "4",
        questions: ["0 + 4 =", "1 + 3 =", "2 + 2 =", "3 + 1 ="]
      },
      {
        info: "5",
        questions: ["0 + 5 =", "1 + 4 =", "2 + 3 =", "3 + 2 =", "4 + 1 ="]
      },
      {
        info: "6",
        questions: ["0 + 6 =", "1 + 5 =", "2 + 4 =", "3 + 3 =", "4 + 2 =", "5 + 1 ="]
      },
      {
        info: "7",
        questions: ["0 + 7 =", "1 + 6 =", "2 + 5 =", "3 + 4 =", "4 + 3 =", "5 + 2 =", "6 + 1 ="]
      },
      {
        info: "8",
        questions: ["0 + 8 =", "1 + 7 =", "2 + 6 =", "3 + 5 =", "4 + 4 =", "5 + 3 =", "6 + 2 =", "7 + 1 ="]
      },
      {
        info: "9",
        questions: ["0 + 9 =", "1 + 8 =", "2 + 7 =", "3 + 6 =", "4 + 5 =", "5 + 4 =", "6 + 3 =", "7 + 2 =", "8 + 1 ="]
      },
      {
        info: "10",
        questions: ["0 + 10 =", "1 + 9 =", "2 + 8 =", "3 + 7 =", "4 + 6 =", "5 + 5 =", "6 + 4 =", "7 + 3 =", "8 + 2 =", "9 + 1 ="]
      },
    ]
  }

  // //// OUTPUT ///////////////////////////////////
  return (
    <BrowserRouter>
      <Switch >
        <Route path="/subject/:id/stackmemory">
          <StackMemoryToolView />
        </Route>
        <Route path="/subject/:id/diagram">
          <ShowSubjectDiagramView />
        </Route>
        <Route path="/subject/:id">
          <SubjectView />
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