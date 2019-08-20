import React from 'react';
import './App.css';
import {createStore} from 'redux'
import rootReducer from './store/reducers'
import {Provider} from 'react-redux'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { LocalizeProvider } from "react-localize-redux";
import Main from './Main';
import About from './About';
import Shop from './Shop';
import Home from './Home';

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


function App(props) {
  return (
   <Provider store={store}> 
   <LocalizeProvider store={store}>
   <Router>
     <div className="App">
       <Main/>
       <Switch>
      <Route path='/home' component={Home}/>
       <Route path='/about' component={About}/>
       <Route path='/shop' component={Shop}/>
        </Switch>
    </div>
    </Router>
     </LocalizeProvider>
    </Provider>  
  );
}

export default App;
