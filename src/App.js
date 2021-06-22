import './App.css';
import { Provider } from 'react-redux'
import store from './configs/store';
import { BrowserRouter as Router, Switch , Route, Redirect} from 'react-router-dom'
import routes from './configs/routes';


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Redirect exact from="/" to="/dashboard" />
          {
            routes.map((route, index) => (
              <Route key={index} path={route.path} exact={route.exact}>
                {route.component}
              </Route>
            ))
          }
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
