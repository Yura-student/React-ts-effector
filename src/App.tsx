import React from 'react';
import {Tab} from './components/Tab';
import { useEffect } from 'react';
import { fetchCheques } from './API/cheques';
import { useStore } from 'effector-react';
import { $chequesListForTable } from './API/cheques/store/table';
import Mod from './components/Modal';

function App() {
  const data = useStore($chequesListForTable)  

  useEffect(() => {
    fetchCheques ({});
  },[])

  return (
    <div> 
      <Mod/>     
      <Tab cheques={data}  />
    </div>
  );
}

export default App;
