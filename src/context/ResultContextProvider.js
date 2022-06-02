import React,{createContext,useContext,useState} from 'react';

const resultContext=createContext();
const baseUrl = '';

export const ResultContextProvide =()=>{
  const [results,setResults] = useState([]);
  const [isLoading,setIsLoading]  
}