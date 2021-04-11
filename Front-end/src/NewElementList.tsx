import React, {useState } from 'react';
import './App.css';


export const NewElementList: React.FC = () => {             //Gestion de l'ajout d'éléments
    const [todoText, setTodoText] = useState('');


    async function AddTodoItem (){                          //Requête POST : ajoute un élément à la liste
      console.log("mon todotext : ", todoText)
      await fetch("http://localhost:8080/api/add",
      {
        method: 'POST',
        headers: 
        {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: todoText
      });
    }
  

    return(
      <form className="form">
          <input type="text" value={todoText} onChange={e => {
              setTodoText(e.target.value)}}/>
          <button type="submit" onClick={e =>{
              e.preventDefault();
              AddTodoItem();
              setTodoText('');
              }}> Add Element
          </button>
      </form>
    );
  };