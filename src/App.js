import React from 'react';
import './App.css';
import Home from './Pages/home';
import Registers from './Components/Register/Registers';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Success from './Pages/Success';
import Admin from './Pages/admin';
import Comfirmation from './Pages/Comfirmation';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/register" exact component={Registers} />
                <Route path="/payment" component={Comfirmation} />
                <Route path="/success" exact component={Success} />
                <Route path="/admin" exact component={Admin} />
            </Switch>
        </Router>
    );
}

export default App;
