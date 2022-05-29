import React from 'react';
import { Routes as Switch, Route,Navigate as Redirect} from 'react-router-dom';

export const Routes = () =>{
    return(
        <div className="p-4">
           <Switch>
               <Route exact path="/">
                   <Redirect to="/search"/>
               </Route>
           </Switch>
        </div>
        );
}