import React from 'react';
import { Routes,Route,Navigate} from 'react-router-dom';
import Results from './Results';

export const NavRoutes = () =>{
    return(
        <div className="p-4">
            <Routes>
                <Route exact path="/" element={<Navigate to="/search" />} />
           
            </Routes>
        </div>
        );
}