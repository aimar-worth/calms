import { Route, Switch } from 'react-router-dom';
import 'antd/dist/antd.css';
import { GlobalStyle } from './styles'

import EnterNamePage from './pages/EnterName'
import MappingPage from './pages/Mapping'
import ResultPage from './pages/Result'

function App() {
  return (
    <>
      <GlobalStyle />
      <Switch>
        <Route path='/' exact component={EnterNamePage} />
        <Route path='/mapping' component={MappingPage} />
        <Route path='/result' component={ResultPage} />
      </Switch>
    </>
  );
}

export default App;


