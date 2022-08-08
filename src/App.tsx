import React from 'react';
import {Tab} from './components/Tab';
import { useEffect } from 'react';
import axiosInstance from './utils/axios';

function App() {
    
  useEffect(() => {  
  const res = axiosInstance.get(`/cheques`)},[])
    
  return (
    <div>
    <Tab /> 
    </div>
  );
}

export default App;
