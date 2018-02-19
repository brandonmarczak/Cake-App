import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Cakes from './Cakes';
import About from './About';
import CakeDetails from './CakeDetails';
import AddCake from './AddCake';
import EditCake from './EditCake';

const Main = () => (
    <main>
    <Switch>
    
    <Route exact path='/' component={Cakes} />
    <Route exact path='/about' component={About} />
    <Route exact path='/cakes/add' component={AddCake} />
    <Route exact path='/cakes/edit/:id' component={EditCake} />
    <Route exact path='/cakes/:id' component={CakeDetails} />
    </Switch>
    </main>
    
    );
    
export default Main;