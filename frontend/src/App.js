import React from 'react';
import './App.scss';
import { Content } from 'carbon-components-react/lib/components/UIShell';
import TutorialHeader from './components/TutorialHeader';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './content/LandingPage';
import OverviewPage from './content/OverviewPage';


const App = () => {
  return (
    <>
  <TutorialHeader />
      <Content>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/overview" component={OverviewPage} />
        </Switch>
      </Content>
    </>
  );
}


export default App;
