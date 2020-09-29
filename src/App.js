import React from 'react';
import logo, { ReactComponent } from './logo.svg';
import './App.css';
import ReactComponentTable from './react-component-table';


function App() {
  return (
    <div>
      <ReactComponentTable values = {[{id: 1, name: "Akanksha", email: "prachi0615@gmail.com", address: "dfds",  bio: "dfd", image: "df"}]}
                           columns = {["name","email","address"]} 
      />

    </div>
  );
}

export default App;
