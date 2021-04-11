import React from 'react';
import './App.css';
import {ElementList} from './ElementList';
import {NewElementList} from './NewElementList';

function App(){


  return(
      <div className="body">
        <h1 className="title">Welcome to THE Todo-List</h1>
        <div className="listStructure">
            <div className="form">
              <NewElementList />
            </div>

            <div className="list">
              <ElementList />
            </div>
        </div>
      </div>
  );
};



export default App;