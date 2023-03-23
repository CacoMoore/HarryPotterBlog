import React, { useEffect, useState } from "react";
import Centro from "../components/centro";
import Card from "../components/card";
import Houses from "../components/houses";
import { Link } from "react-router-dom";
//import File from "../components/file";

const Home = (props) => {
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
            <Centro />
                        
  
            <div className="cards container px-4 py-5" id="custom-cards">
                <h2 className="pb-2 border-bottom">Houses</h2>

                <div className="row row-cols-1 row-cols-lg-4 align-items-stretch g-4 py-5">

                    <Link to="/gryffindor" style={{ textDecoration: 'none' }}>
                    <div className="col" >
                        <Houses
                            bkg="https://img3.goodfon.com/wallpaper/nbig/2/45/griffindor-gryffindor-garri.jpg"
                            housename="Gryffindor"
                        />
                    </div>
                    </Link>

                    <Link to="/ravenclaw" style={{ textDecoration: 'none' }}>
                    <div className="col">
                        <Houses
                            bkg="https://www.pixelstalk.net/wp-content/uploads/images6/The-best-Ravenclaw-Background.jpg"
                            housename="Ravenclaw"
                        />
                    </div>
                    </Link>

                    <Link to="hufflepuff" style={{ textDecoration: 'none' }}>
                    <div className="col">
                        <Houses
                            bkg="https://i.pinimg.com/originals/ba/e0/3b/bae03b199c524e881bebe214ced4ab88.jpg"
                            housename="Hufflepuff"
                        />
                    </div>
                    </Link>

                    <Link to="slytherin" style={{ textDecoration: 'none' }}>
                    <div className="col">
                        <Houses
                            bkg="https://images3.alphacoders.com/556/556529.jpg"
                            housename="Slytherin"
                        />
                    </div>
                    </Link>



                </div>
            </div>

            <div className="cards container px-4 py-5" id="custom-cards">
                <h2 className="pb-2 border-bottom">Characters</h2>

                
                <div className="row row-cols-1 row-cols-lg-4 align-items-stretch g-4 py-5">
                    {characters ?
                        characters.map((character) => (                            //función map retorna un array --> (Character) en singular tiene la información de la API
                        <Link to="detail" style={{ textDecoration: 'none' }}>
                            <div className="col-md-12">
                                <Card
                                    image={character.image}
                                    name={character.name}
                                    house={character.house}
                                    ancestry={character.ancestry}

                                />
                            </div>
                        </Link>

                        ))
                        : "Error. No se pudieron cargar los personasjes"}

                </div>
                
            </div>

        </>
    )

}

export default Home;