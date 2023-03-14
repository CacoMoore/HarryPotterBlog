

import React, { useEffect, useState } from "react";
import Navbar from "./components/navbar";
import Centro from "./components/centro";
import Card from "./components/card";

const App = (props) => {
  const [characters, setCharacters] = useState([]);

  const getCharacters = () => {
    fetch("https://hp-api.onrender.com/api/characters")
      .then(res => res.json())
      .then(data => setCharacters(data))
      .catch(error => console.log(error))
  };
  useEffect(() => {
    getCharacters();
    console.log(characters);

  },)

  return (
    <>
      <Navbar />
      <Centro />

      <div className="cards container px-4 py-5" id="custom-cards">
        <h2 className="pb-2 border-bottom">Characters</h2>

        <div className="row row-cols-1 row-cols-lg-4 align-items-stretch g-4 py-5">
          {characters ?
            characters.map((character) => (                            //función map retorna un array --> (Character) en singular tiene la información de la API
              <div className="col-md-12">
                <Card
                  image={character.image}
                  name={character.name}
                  house={character.house}
                  ancestry={character.ancestry}

                />
              </div>

            ))
            : "Error. No se pudieron cargar los personasjes"}

        </div>
      </div>

      <div className="cards container px-4 py-5" id="custom-cards">
        <h2 className="pb-2 border-bottom">Houses</h2>

        <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">

          <div className="col">
            <Card

            />
          </div>

          <div className="col">
            <Card

            />
          </div>

          <div className="col">
            <Card

            />
          </div>

        </div>
      </div>



    </>
  );
};

export default App;