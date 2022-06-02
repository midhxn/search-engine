import React,{createContext,useContext,useState} from 'react';

const resultContext=createContext();
const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1/search/q=elon+musk';

export const ResultContextProvide =({children})=>{
  const [results,setResults] = useState([]);
  const [isLoading,setIsLoading] = useState(false);
  const [searchTerm,setSearchTerm] =  useState('');

  // /videos, /search, /images

  const getResults =async(type) => {
      setIsLoading(true);

      const response = await fetch(`${baseUrl}${type}`,{
          method:'GET',
          headers:{
            'X-User-Agent': 'desktop',
            'X-Proxy-Location': 'EU',
            'X-RapidAPI-Host': 'google-search3.p.rapidapi.com',
            'X-RapidAPI-Key': 'ee5692c164msh705eae3a256ad7dp19e3d5jsna3f62b014628'

          }
      })
  }
}