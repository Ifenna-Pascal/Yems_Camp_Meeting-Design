import React from 'react';
import './App.css';
import Home from './Pages/home';
import Registers from './Components/Register/Registers';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Success from './Pages/Success';
import Admin from './Pages/admin';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/register" exact component={Registers} />
                <Route path="/success" exact component={Success} />
                <Route path="/admin" exact component={Admin} />
            </Switch>
        </Router>
    );
}

export default App;
