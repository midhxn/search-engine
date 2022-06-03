import React,{useEffect}from 'react';
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';

import { useResultContext } from '../context/ResultContextProvider';
import {Loading} from './Loading';

export const Results = () => {

  const {results,isLoading,getResults,searchTerm} = useResultContext();
  const location = useLocation();

  

  if (isLoading) return <Loading/>
 
  switch (location.pathname) {
      case './search':
        return (
            <div className="flex flex-wrap justify-between space-y-6 sm:px-56">
                {results?.results?.map(({link,title})=>(
                  
                ) )}
            </div>)

      case './images':
        return 'SEARCH';
        break; 

      case './news':
          return 'SEARCH';
          break;  

      case './search':
          return 'SEARCH';
          break;    
  
    default:
      return 'ERROR';
  }
}
