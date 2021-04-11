import React, { useEffect, useState } from 'react';
import './App.css';


export const ElementList: React.FC = () => {
    const[todoList, setTodoList]= useState([]);


    async function GetTodoList(){
            const response = await fetch("http://localhost:8080/api/all", {method:'GET'});
            const dataBDD = await response.json();
            setTodoList(dataBDD);
    }


    async function ChangeFinishedStatus(dataFetch : Todo){
        await fetch("http://localhost:8080/api/suppress", 
        {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            method: 'DELETE', 
            body: JSON.stringify(dataFetch.id)
        });
    }


    useEffect(() => {GetTodoList()});
    return(
        <ul className="listTodos">
            {
                todoList.map((dataFetch: Todo) => {
                    return (
                        <li className="listElement" key={dataFetch.id}>
                            <label>
                                <input className="checkspot" type="checkbox" value={dataFetch.text} checked={dataFetch.finished} onChange={()=> ChangeFinishedStatus(dataFetch)}/>
                                {dataFetch.text}
                            </label>
                        </li>
                    )
                })
            }
        </ul>
    );          
};

















    /*async function UpdateItem(dataFetch : Todo){
        await fetch("http://localhost:8080/api/update", 
        {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            method: 'PUT', 
            body: (dataFetch.id, dataFetch.text)
        }
        );
    }*/