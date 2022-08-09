import React from 'react';
import {Tab} from './components/Tab';
import { useEffect } from 'react';
import axiosInstance from './utils/axios';
import {cheques} from './data/cheques';

function App() {
    
  useEffect(() => {  
  const res = axiosInstance.get(`/cheques`)},[])
    
  return (
    <div>
    <Tab cheques={cheques[0]} /> 
    </div>
  );
}

export default App;
