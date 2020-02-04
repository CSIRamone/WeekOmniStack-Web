import React, { useState, useEffect } from 'react';
import api from './services/api';
import DevItem from './components/DevItem';
import DevForm from './components/DevForm';
import './global.css';
import './SideBar.css';
import './Main.css';
import './App.css';

function App() {
 
  

  useEffect(() => {
      async function loadDevs(){
        const response = await api.get('/devs');
        setDevs(response.data);
      }
      loadDevs();
  }, []);

  async function handleAddDev(data){
   
    const response = await api.post('/devs', data);
    console.log(response.data);
   
    setDevs([...devs, response.data]);
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
          <DevForm onSubmmit={handleAddDev} />
        
      </aside>


      <main>
          <ul>
            {devs.map(dev => (
               <DevItem key={dev._id} dev={dev} />
            ))}                
           
          </ul>
      </main>
    </div>
  );
}

export default App;
