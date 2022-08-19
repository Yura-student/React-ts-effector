import React, { useState } from 'react';
import {Tab} from './components/Tab';
import { useEffect } from 'react';
import { addCheques, fetchCheques } from './API/cheques';
import { useStore } from 'effector-react';
import { $chequesListForTable } from './API/cheques/store/table';

function App() {
  const data = useStore($chequesListForTable)

  useEffect(() => {
    fetchCheques ({} );
  },[])
  
  return (
    <div> 
      <Tab cheques={data}/>
    </div>
  );
}

export default App;
