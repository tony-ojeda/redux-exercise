import Candidates from './components/candidates/candidates.component';
import Filters from './components/filters/filters.component';
import ResuemVotes from './components/resume-votes/resume-votes.component';
import TotalVotes from './components/total-votes/total-votes.component';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Candidates></Candidates>
      <div className="operations">
        <div className="filter">
          <Filters></Filters>
        </div>
        <div className="resume">
          <div className="resume__total">
            <TotalVotes></TotalVotes>
          </div>
          <div className="resume__detail">
            <ResuemVotes></ResuemVotes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

