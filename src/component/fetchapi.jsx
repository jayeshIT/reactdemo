import { React, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./fetchapi.css";
export const Fetchapi = () => {
  const [apidata, setApidata] = useState(null);
  //var apiurl = "https://jsonplaceholder.typicode.com/posts";
  var apiurl = "https://pokeapi.co/api/v2/pokemon/squirtle";
  /*----------------------------------------------------
  //Below is wrong approach for fetchin data 
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => {
      console.log("Data", data.length);
      setApidata(data);
    })
    .catch((error) => {
      console.log("Errror" + error.message);
    });
  //----------------------------------------------------*/
  //======================This is correct approact========\

  /*const getDatapromiseWay = () => {
    fetch(apiurl)
      .then((res) => res.json())
      .then((data) => {
        console.log("Data", data.length);
        setApidata(data);
      })
      .catch((error) => {
        console.log("Errror" + error.message);
      });
  };*/

  const getDataAsyncWay = async () => {
    try {
      var res = await fetch(apiurl);
      var data = await res.json();
      setApidata(data);
    } catch (error) {
      console.log("Errror" + error.message);
    }
  };

  useEffect(() => {
    getDataAsyncWay();
  });

  if (apidata) {
    return (
      <>

        <section className="container">
          <NavLink to="/movies">Movies List</NavLink>
          <header>
            <h1>Let's catch pokemon</h1>
          </header>
          <ul className="card-demo">
            <li className="pokemon-card">
              <figure>
                <img
                  alt={apidata.name}
                  src={apidata.sprites.other.dream_world.front_default}
                ></img>
              </figure>
              <h2>{apidata.name}</h2>
            </li>
          </ul>
        </section>
      </>
    );
  } else
    return (
      <>
        <section className="container">
          <header>
            <h1>Let's catch pokemon</h1>
          </header>
          <ul className="card-demo">
            <li className="pokemon-card">
              <h2>Loading...</h2>
            </li>
          </ul>
        </section>
      </>
    );
};
