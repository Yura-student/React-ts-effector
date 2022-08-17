import React from 'react';
import {Tab} from './components/Tab';
import { useEffect } from 'react';
import { fetchCheques } from './API/cheques';
import { useStore } from 'effector-react';
import { $chequesListForTable } from './API/cheques/store/table';
import Mod from './components/Modal';
import DeleteModal from './components/DeleteModal';

function App() {
  const data = useStore($chequesListForTable)  

  useEffect(() => {
    fetchCheques ({});
  },[])

  return (
    <div> 
      <Mod/>    
            
      <Tab cheques={data}>
        {/* <DeleteModal /> */}
      </Tab>
    </div>
  );
}

export default App;
